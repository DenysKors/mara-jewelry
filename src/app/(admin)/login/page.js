import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';

import { signIn, auth } from '@/auth';

import styles from './page.module.css';

export default async function LoginPage() {
  const session = await auth();

  if (!!session?.user) return redirect(`/dashboard`);

  return (
    <main className={styles.main}>
      <form
        action={async formData => {
          'use server';
          try {
            await signIn('credentials', formData);
          } catch (error) {
            if (error instanceof AuthError) {
              return redirect(`/error?error=AccessDenied`);
            } else throw error;
          }
        }}
      >
        <label htmlFor="email">
          Email
          <input name="email" id="email" />
        </label>
        <label htmlFor="password">
          Password
          <input name="password" id="password" />
        </label>
        <button
          className={styles.button}
          type="submit"
          aria-label="sing-in"
          title="Увійти"
        >
          Увійти
        </button>
      </form>
    </main>
  );
}
