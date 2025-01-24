import { adminGoogleCredentials } from './constants/adminAccess';

export const authConfig = {
  pages: {
    signIn: '/login',
    error: '/error',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

      if (isOnDashboard) {
        if (
          isLoggedIn &&
          isLoggedIn?.name === adminGoogleCredentials.name &&
          isLoggedIn?.email === adminGoogleCredentials.email
        )
          return true;
        return false;
      } else if (
        isLoggedIn &&
        isLoggedIn?.name === adminGoogleCredentials.name &&
        isLoggedIn?.email === adminGoogleCredentials.email
      ) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
    signIn({ profile }) {
      if (profile) return profile?.email === adminGoogleCredentials.email;
    },
  },
  providers: [],
};
