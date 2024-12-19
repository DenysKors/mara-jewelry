'use client';

import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import styles from './DeleteProduct.module.css';

const delProdSchema = Yup.object().shape({
  code: Yup.string()
    .min(4, 'Повинно бути 4 символи')
    .max(4, 'Повинно бути 4 символи')
    .matches(/^[0-9]*$/, 'Тільки цифри')
    .required("Поле обов'язкове"),
});

export default function DeleteProduct() {
  const handleSubmit = async (values, { resetForm }) => {
    const response = await fetch('/api/delete-product', {
      method: 'DELETE',
      body: JSON.stringify(values.code),
    });
    console.log(response);
    if (response.ok) {
      resetForm();
      toast.success('Товар видалений');
    } else if (response.status === 404) {
      toast.error('Товар не знайдено');
    } else toast.error('Помилка при збереженні, повторіть знову');
  };

  return (
    <Formik
      initialValues={{ code: '' }}
      validationSchema={delProdSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <label className={styles.lable}>
            Код товару:
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
            aria-label="delete product"
            disabled={isSubmitting}
          >
            Видалити товар
          </button>
        </Form>
      )}
    </Formik>
  );
}
