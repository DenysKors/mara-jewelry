'use client';

import { useRef } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';

import styles from './AddArticleForm.module.css';
import imgPlaceholder from '../../../public/no-image-placeholder.png';

const initialValues = {
  title: '',
  parts: [
    {
      image: null,
      text: '',
      blobImage: null,
    },
  ],
};

const articleSchema = Yup.object().shape({
  title: Yup.string()
    .max(50, 'Заголовок занадто довгий')
    .required("Заголовок обов'язковий"),
  parts: Yup.array().of(
    Yup.object().shape({
      image: Yup.mixed().required("Фото обов'язкове"),
      text: Yup.string().required("Зміст обов'язковий"),
    })
  ),
});

export default function AddArticleForm() {
  const inputRef = useRef(null);

  const handleSubmit = async (values, { resetForm }) => {
    const articleData = new FormData();

    articleData.append('title', values.title);

    values.parts.forEach((part, idx) => {
      articleData.append(`image${[idx]}`, part.image[0]);
    });

    const parts = values.parts.map(part => {
      return { text: part.text };
    });

    articleData.append('parts', JSON.stringify(parts));

    const response = await fetch('/api/add-article', {
      method: 'POST',
      body: articleData,
    });

    if (response.ok) {
      resetForm();
      // Manually set input file value due to formik failure:
      inputRef.current[1].value = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      toast.success('Стаття збережена');
    } else toast.error('Помилка при збереженні, повторіть знову');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={articleSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form ref={inputRef}>
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
            {({ _, remove, push }) => (
              <>
                {values.parts.length > 0 &&
                  values.parts.map((part, index) => (
                    <div className={styles.formGroup} key={index}>
                      <p
                        className={styles.subTitle}
                      >{`Фото (розмір 510х580) частини ${index + 1}:`}</p>
                      <Field name={`parts.${index}.image`}>
                        {() => (
                          <input
                            className={styles.input}
                            type="file"
                            accept="image/*,.png, .jpeg, .webp"
                            onChange={event => {
                              if (event.target.value === '') return;
                              else
                                setFieldValue(
                                  `parts.${index}.image`,
                                  event.currentTarget.files
                                );
                              setFieldValue(
                                `parts.${index}.blobImage`,
                                URL.createObjectURL(
                                  event.currentTarget.files[0]
                                )
                              );
                            }}
                          />
                        )}
                      </Field>
                      {part.image ? (
                        <div className={styles.thumb}>
                          <Image
                            className={styles.img}
                            src={part.blobImage}
                            width={278}
                            height={316}
                            alt={index}
                          />
                        </div>
                      ) : (
                        <div className={styles.thumb}>
                          <Image
                            className={styles.img}
                            src={imgPlaceholder}
                            width={278}
                            height={316}
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
                        name={`parts.${index}.text`}
                        component="div"
                      />
                      {index !== 0 && (
                        <div>
                          <button
                            className={styles.btnRemove}
                            type="button"
                            title="Видалити частину"
                            onClick={() => remove(index)}
                          >
                            {`Видалити частину ${index + 1}`}
                          </button>
                        </div>
                      )}
                      {index === values.parts.length - 1 && index < 2 && (
                        <button
                          className={styles.btnAdd}
                          type="button"
                          title="Додати частину"
                          onClick={() =>
                            push({ image: null, text: '', blobImage: null })
                          }
                        >
                          {`Додати частину ${index + 2}`}
                        </button>
                      )}
                    </div>
                  ))}
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
