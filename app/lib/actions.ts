'use server';
import {signIn, signOut} from '@/auth';
import {AuthError} from 'next-auth';
import { sql } from '@vercel/postgres';
import {SignupFormSchema, FormState} from '@/app/lib/definitions'
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation'
import {Routes} from "@routes";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
      case 'CredentialsSignin':
        return 'Invalid credentials.';
      default:
        return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function signOutAction() {
  await signOut();
}

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

  try  {
    await sql`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword})
    `;

    const result = await signIn('credentials', {
      email,
      password,
    });

    if (result && 'error' in result) {
      return {
        message: 'Login after signup failed.',
      };
    }

    return { success: true };

  } catch (error) {
    console.error('Error during signup:', error)
    return {
      message: 'Database Error: Failed to Sign up a new user.',
    };
  } finally {
    redirect(Routes.GAME);
  }
}
