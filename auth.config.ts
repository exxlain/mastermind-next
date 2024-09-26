// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import type { NextAuthConfig } from 'next-auth';
import { Routes } from '@routes';

export const authConfig = {
  pages: {
    signIn: Routes.LOGIN,
  },
  callbacks: {
    authorized({ auth, request: { nextUrl }  }) {
      const isLoggedIn = !!auth?.user;
      const isOnGamePage = nextUrl.pathname.startsWith(Routes.GAME);
      const isOnScorePage = nextUrl.pathname.startsWith(Routes.SCORE);
      if (isOnGamePage || isOnScorePage) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        const newUrl = new URL(Routes.GAME, nextUrl)
        return Response.redirect(newUrl);
      }
      return true;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id
      return session
    },
  },
  providers: [],
} satisfies NextAuthConfig;
