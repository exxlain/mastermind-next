import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from '@/app/lib/session';
import { cookies } from 'next/headers';
import {Routes} from '@/app/lib/routes'

const protectedRoutes = [Routes.GAME, Routes.SCORE];
const publicRoutes = [Routes.HOME, Routes.LOGIN, Routes.SIGNUP];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path as Routes);
  const isPublicRoute = publicRoutes.includes(path as Routes);

  const cookie = cookies().get('session')?.value;
  const session = await decrypt(cookie);

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL(Routes.LOGIN, req.nextUrl));
  }

  if (
    isPublicRoute &&
        session?.userId &&
        !req.nextUrl.pathname.startsWith(Routes.GAME)
  ) {
    return NextResponse.redirect(new URL(Routes.GAME, req.nextUrl));
  }

  return NextResponse.next();
}
