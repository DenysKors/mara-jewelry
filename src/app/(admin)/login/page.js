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
        <button type="submit">Signin with Google</button>
      </form>
    </main>
  );
}
