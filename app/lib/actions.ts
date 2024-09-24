'use server';
import {signIn, signOut} from '@/auth';
import {AuthError} from 'next-auth';
import { sql } from '@vercel/postgres';

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
