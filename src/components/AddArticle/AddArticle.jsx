'use client';

import Image from 'next/image';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import styles from './AddArticle.module.css';
import imgPlaceholder from '../../../public/no-image-placeholder.png';

const initialValues = {
  image: null,
  title: '',
  text: '',
};

const articleSchema = Yup.object().shape({
  image: Yup.string().required("Фото обов'язкове"),
  title: Yup.string()
    .max(50, 'Заголовок занадто довгий')
    .required("Заголовок обов'язковий"),
  text: Yup.string().required("Зміст обов'язковий"),
});

export default function AddArticle() {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={articleSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <label className={styles.lable}>
            Заголовок:
            <Field
              className={styles.textField}
              type="text"
              name="title"
              maxLength="50"
            />
          </label>
          <ErrorMessage className={styles.error} name="title" component="div" />
          <p className={styles.subTitle}>Фото:</p>
          <Field name="image">
            {() => (
              <input
                className={styles.input}
                type="file"
                accept="image/*,.png, .jpeg, .webm"
                onChange={event => {
                  setFieldValue('image', event.currentTarget.files);
                }}
              />
            )}
          </Field>
          <div className={styles.wrapper}>
            {values.image ? (
              [...values.image].map((item, idx) => (
                <div className={styles.thumb} key={idx}>
                  <Image
                    className={styles.img}
                    src={URL.createObjectURL(item)}
                    width={335}
                    height={380}
                    alt={idx}
                  />
                </div>
              ))
            ) : (
              <div className={styles.thumb}>
                <Image
                  className={styles.img}
                  src={imgPlaceholder}
                  width={335}
                  height={380}
                  alt="No image"
                  priority
                />
              </div>
            )}
          </div>
          <ErrorMessage className={styles.error} name="image" component="div" />
          <label className={styles.lable}>
            Зміст:
            <Field
              className={styles.textareaField}
              component="textarea"
              name="text"
              rows="16"
            />
          </label>
          <ErrorMessage className={styles.error} name="text" component="div" />
          <button
            className={styles.button}
            type="submit"
            aria-label="add article"
          >
            Додати статтю
          </button>
        </Form>
      )}
    </Formik>
  );
}
