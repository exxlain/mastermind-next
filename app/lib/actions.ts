'use server';
import {signIn, signOut} from '@/auth';
import {AuthError} from 'next-auth';
//import { sql } from '@vercel/postgres';
import { db } from '@vercel/postgres';


const client = await db.connect();

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
  const date = new Date().toISOString().split('T')[0];
  try  {
    await client.sql`
      INSERT INTO scores (iterations, used_time, user_id, date)
      VALUES (${iterations}, ${used_time}, ${user_id}, ${date})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
}
