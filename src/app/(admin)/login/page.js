import { signIn } from '@/auth';
import { redirect } from 'next/navigation';

import styles from './page.module.css';

export default function LoginPage() {
  return (
    <main className={styles.main}>
      <form
        action={async () => {
          'use server';
          try {
            await signIn('google');
          } catch (error) {
            if (error) {
              return redirect(`/error?error=AccessDenied`);
            }
            throw error;
          }
        }}
      >
        <button
          className={styles.button}
          type="submit"
          aria-label="sing-in"
          title="Увійти"
        >
          Увійти з Google
        </button>
      </form>
    </main>
  );
}
