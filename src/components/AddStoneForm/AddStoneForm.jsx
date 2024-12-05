'use client';

// import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import styles from './AddStoneForm.module.css';

const initialValues = {
  name: '',
  value: '',
};

const stoneSchema = Yup.object().shape({
  name: Yup.string()
    .max(25, 'Назва занадто довга')
    .matches(
      /^[а-яієїґ'()\s]+$/,
      'Тільки маленькі літери, між словами використовуйте пробіл'
    )
    .required("Назва обов'язкова"),
  value: Yup.string()
    .max(25, 'Значення занадто довге')
    .matches(
      /^[a-z\-]+$/,
      'Тільки маленькі літери, тут замість пробілу між словами використовуйте знак -'
    )
    .required("Назва обов'язкова"),
});

export default function AddStoneForm() {
  const handleSubmit = async (values, { resetForm }) => {
    const stoneData = {
      name: values.name.trim(),
      value: values.value.trim(),
    };

    console.log(stoneData);
    // const response = await fetch('/api/add-article', {
    //   method: 'POST',
    //   body: JSON.stringify(values),
    // });
    // if (response.ok) {
    //   resetForm();
    //   toast.success('Камінь збережений');
    // } else toast.error('Помилка при збереженні, повторіть знову');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={stoneSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <label className={styles.lable}>
            Назва (українською):
            <Field
              className={styles.textField}
              type="text"
              name="name"
              maxLength="25"
            />
          </label>
          <ErrorMessage className={styles.error} name="name" component="div" />
          <label className={styles.lable}>
            Значення (переклад назви англійською):
            <Field
              className={styles.textField}
              type="text"
              name="value"
              maxLength="25"
            />
          </label>
          <ErrorMessage className={styles.error} name="value" component="div" />
          <button
            className={styles.button}
            type="submit"
            aria-label="add stone"
            disabled={isSubmitting}
          >
            Додати камінь
          </button>
        </Form>
      )}
    </Formik>
  );
}
