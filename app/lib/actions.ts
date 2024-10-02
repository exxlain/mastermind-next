'use server';
import { sql } from '@vercel/postgres';
import {SignupFormSchema, FormState, LoginFormSchema} from '@/app/lib/definitions'
import bcrypt from 'bcrypt';
import {createSession, deleteSession} from "@/app/lib/session";
import prisma from '@/lib/prisma';

export async function saveGameResult({ iterations, used_time, user_id }: { iterations: number, used_time: number, user_id: string }) {
  try  {
    await sql`
      INSERT INTO scores (iterations, used_time, user_id)
      VALUES (${iterations}, ${used_time}, ${user_id})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
}

export async function signupUser(state: FormState, formData: FormData) {
  const name =  formData.get('name');
  const email =  formData.get('email');
  const password =  formData.get('password');

  if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
    return {
      message: 'Invalid input values.',
    };
  };

  const validatedFields = SignupFormSchema.safeParse({
    name: name,
    email: email,
    password: password,
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
  const saltRounds = 11
  const hashedPassword = await bcrypt.hash(password as string, saltRounds);

  const user = await prisma.users.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });

  await createSession(user.id)

}

export async function login(
  state: FormState,
  formData: FormData,
): Promise<FormState> {
  const email =  formData.get('email');
  const password =  formData.get('password');
  if (typeof email !== 'string' || typeof password !== 'string') {
    return {
      message: 'Invalid input values.',
    };
  };

  const validatedFields = LoginFormSchema.safeParse({
    email: email,
    password: password,
  });
  const errorMessage = { message: 'Invalid login credentials.' };

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const user = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) {
    return errorMessage;
  }
  const passwordMatch = await bcrypt.compare(
    validatedFields.data.password,
    user.password,
  );

  if (!passwordMatch) {
    return errorMessage;
  }

  const userId = user.id.toString();
  await createSession(userId);
}

export async function logout() {
  deleteSession();
}
