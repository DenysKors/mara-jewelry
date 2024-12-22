'use client';

import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import styles from './DeleteArticle.module.css';

const delArtSchema = Yup.object().shape({
  code: Yup.string()
    .max(4, 'Повинно бути 4 символи')
    .matches(/^[0-9]*$/, 'Тільки цифри')
    .required("Поле обов'язкове"),
});

export default function DeleteArticle() {
  const handleSubmit = async (values, { resetForm }) => {
    const response = await fetch('/api/delete-article', {
      method: 'DELETE',
      body: JSON.stringify(values.code),
    });

    if (response.ok) {
      resetForm();
      toast.success('Стаття видалена');
    } else if (response.status === 404) {
      toast.error('Стаття не знайдена');
    } else toast.error('Помилка при збереженні, повторіть знову');
  };

  return (
    <Formik
      initialValues={{ code: '' }}
      validationSchema={delArtSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <label className={styles.lable}>
            Код статті:
            <Field
              className={styles.textField}
              type="text"
              name="code"
              maxLength="4"
            />
          </label>
          <ErrorMessage className={styles.error} name="code" component="div" />
          <button
            className={styles.button}
            type="submit"
            aria-label="delete article"
            disabled={isSubmitting}
          >
            Видалити статтю
          </button>
        </Form>
      )}
    </Formik>
  );
}
