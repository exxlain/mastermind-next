import { z } from 'zod'

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Score = {
  date: string;
  id: string;
  iterations: number;
  used_time: number;
  user_id: string,
};

export type ScoreForScreen = {
  date: Date;
  id: string;
  iterations: number;
  used_time: number;
  user: {
    name: string,
    id: string,
  },
};

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
})

export type FormState =
    | {
  errors?: {
    name?: string[]
    email?: string[]
    password?: string[]
  }
  message?: string
}
    | undefined


export type SessionPayload = {
  userId: string | number;
  expiresAt: Date;
};

export const LoginFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(6, { message: 'Password field must not be empty.' }),
});
