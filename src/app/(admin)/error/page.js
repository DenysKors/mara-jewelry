'use client';

import Link from 'next/link';

import { useSearchParams } from 'next/navigation';

import styles from './error.module.css';

const errorMap = {
  ['AccessDenied']: (
    <p>
      Виникла проблема при автентифікації. <strong>Доступ заборонено.</strong>
    </p>
  ),
};

export default function AuthErrorPage() {
  const search = useSearchParams();
  const error = search.get('error');

  return (
    <main className={styles.box}>
      <h5>Щось пішло не так, як хотілось!</h5>
      <div>
        {errorMap[error] || 'Будь ласка напишіть нам, якщо це сталося.'}
      </div>
      <Link className={styles.link} href="/">
        Повернутися на Головну
      </Link>
    </main>
  );
}
