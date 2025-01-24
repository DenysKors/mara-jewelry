import { signIn } from '@/auth';

import styles from './page.module.css';

export default function LoginPage() {
  return (
    <main className={styles.main}>
      <form
        action={async () => {
          'use server';
          await signIn('google');
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
