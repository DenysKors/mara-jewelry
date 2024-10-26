'use client';

import Image from 'next/image';
import * as Yup from 'yup';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';

import styles from './AddArticle.module.css';
import imgPlaceholder from '../../../public/no-image-placeholder.png';

const initialValues = {
  title: '',
  parts: [
    {
      image: null,
      text: '',
    },
  ],
};

const articleSchema = Yup.object().shape({
  title: Yup.string()
    .max(50, 'Заголовок занадто довгий')
    .required("Заголовок обов'язковий"),
  parts: Yup.array().of(
    Yup.object().shape({
      image: Yup.string().required("Фото обов'язкове"),
      text: Yup.string().required("Зміст обов'язковий"),
    })
  ),
});

export default function AddArticle() {
  const handleSubmit = (values, { resetForm }) => {
    // async/await AddArticle()
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={articleSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form>
          <p className={styles.error}>
            Стаття може складатися з однієї, двох або трьох частин
          </p>
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
          <FieldArray name="parts">
            {({ insert, remove, push }) => (
              <>
                {values.parts.length > 0 &&
                  values.parts.map((part, index) => (
                    <div className={styles.formGroup} key={index}>
                      <p className={styles.subTitle}>{`Фото частини ${
                        index + 1
                      }:`}</p>
                      <Field name={`parts.${index}.image`}>
                        {() => (
                          <input
                            className={styles.input}
                            type="file"
                            accept="image/*,.png, .jpeg, .webp"
                            onChange={event => {
                              setFieldValue(
                                `parts.${index}.image`,
                                event.currentTarget.files
                              );
                            }}
                          />
                        )}
                      </Field>
                      {part.image ? (
                        <div className={styles.thumb}>
                          <Image
                            className={styles.img}
                            src={URL.createObjectURL(part.image[0])}
                            width={335}
                            height={380}
                            alt={index}
                          />
                        </div>
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
                      <ErrorMessage
                        className={styles.error}
                        name={`parts.${index}.image`}
                        component="div"
                      />
                      <label className={styles.lable}>
                        {`Зміст частини ${index + 1}:`}
                        <Field
                          className={styles.textareaField}
                          component="textarea"
                          name={`parts.${index}.text`}
                          rows="16"
                        />
                      </label>
                      <ErrorMessage
                        className={styles.error}
                        name="text"
                        component="div"
                      />

                      <div>
                        <button type="button" onClick={() => remove(index)}>
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type="button"
                  onClick={() => push({ image: '', text: '' })}
                >
                  Add part
                </button>
              </>
            )}
          </FieldArray>
          <button
            className={styles.button}
            type="submit"
            aria-label="add article"
            disabled={isSubmitting}
          >
            Додати статтю
          </button>
        </Form>
      )}
    </Formik>
  );
}
