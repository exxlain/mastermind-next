import type { NextAuthConfig } from 'next-auth';
import { Routes } from '@routes';

export const authConfig = {
    pages: {
        signIn: Routes.LOGIN,
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnGamePage = nextUrl.pathname.startsWith(Routes.GAME);
            if (isOnGamePage) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                const newUrl = new URL(Routes.GAME, nextUrl)
                return Response.redirect(newUrl);
            }
            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
