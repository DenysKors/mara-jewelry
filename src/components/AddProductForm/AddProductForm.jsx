'use client';

import { useRef } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';

import styles from './AddProductForm.module.css';
import imgPlaceholder from '../../../public/no-image-placeholder.png';
import { CATEGORIES_ENUMS } from '@/constants/enums';
import { CATEGORIES } from '@/constants/categories';

export default function AddProductForm({ allStones }) {
  const inputRef = useRef(null);
  const allStonesValue = allStones.map(stone => stone.value);

  const handleSubmit = async (values, { resetForm }) => {
    const isDuplicated = values.stones.some(
      (el, idx, arr) => arr.indexOf(el) !== idx
    );

    if (isDuplicated) {
      return toast.error(
        'Додано декілька однакових каменів! Видаліть дублювання'
      );
    } else if (!(values.images.length === 2)) {
      return toast.error('Додана невірна кількість фото (розмір 280x260)!');
    }

    const stonesAmount = values.stones.length;
    const stonesArray = [];

    for (let i = 0; i < stonesAmount; i += 1) {
      let stonesObj = allStones.find(stone => stone.value === values.stones[i]);
      stonesArray.push(stonesObj);
    }

    const productData = new FormData();
    productData.append('title', values.title);
    productData.append('description', values.description);
    productData.append('category', values.category);
    productData.append('stones', JSON.stringify(stonesArray));
    [...values.images].forEach(image => {
      productData.append('image', image);
    });
    productData.append('wideImage', values.wideImage[0]);
    productData.append('price', values.price);

    const response = await fetch('/api/add-product', {
      method: 'POST',
      body: productData,
    });
    if (response.ok) {
      resetForm();
      // Manually set inputs file value due to formik failure:
      inputRef.current[9].value = '';
      inputRef.current[10].value = '';

      window.scrollTo({ top: 0, behavior: 'smooth' });
      toast.success('Товар збережено');
    } else toast.error('Помилка при збереженні, повторіть знову');
  };
  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        category: '',
        stones: [''],
        images: null,
        wideImage: null,
        price: 0,
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string()
          .max(50, 'Заголовок занадто довгий')
          .required("Назва обов'язкова"),
        description: Yup.string().required("Опис обов'язковий"),
        category: Yup.string()
          .oneOf(Object.keys(CATEGORIES_ENUMS))
          .required("Категорія обов'язкова"),
        stones: Yup.array()
          .of(
            Yup.string().test('valid', 'Виберіть камінь зі списку', val => {
              if (allStonesValue.includes(val)) return true;
              return false;
            })
          )
          .required(),
        images: Yup.mixed().required("Фото обов'язкове"),
        wideImage: Yup.mixed().required("Фото обов'язкове"),
        price: Yup.number()
          .integer('Ціна повинна бути цілим числом')
          .moreThan(0, 'Ціна повинна бути більше 0')
          .required("Ціна обов'язкова"),
      })}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form ref={inputRef}>
          <label className={styles.lable}>
            Назва:
            <Field
              className={styles.textField}
              type="text"
              name="title"
              maxLength="50"
            />
          </label>
          <ErrorMessage className={styles.error} name="title" component="div" />
          <label className={styles.lable}>
            Опис:
            <Field
              className={styles.textareaField}
              component="textarea"
              name="description"
              rows="10"
            />
          </label>
          <ErrorMessage
            className={styles.error}
            name="description"
            component="div"
          />
          <p className={styles.title}>Категорія:</p>
          <div className={styles.box}>
            {CATEGORIES &&
              CATEGORIES.map((category, index) => {
                return (
                  <label key={index} className={styles.categoryLabel}>
                    <Field
                      type="radio"
                      name="category"
                      value={category.value}
                    />
                    {category.name}
                  </label>
                );
              })}
          </div>
          <ErrorMessage
            className={styles.error}
            name="category"
            component="div"
          />
          <p className={styles.title}>Камені, з яких складаеться виріб:</p>
          <FieldArray name="stones">
            {({ insert, remove }) => (
              <>
                {values.stones &&
                  values.stones.length > 0 &&
                  values.stones.map((_, index, arr) => (
                    <div key={index}>
                      <div className={styles.optionBox}>
                        <button
                          className={styles.btnAdd}
                          type="button"
                          onClick={() => insert(index, '')}
                        >
                          &#43;
                        </button>

                        <Field
                          className={styles.select}
                          component="select"
                          name={`stones.${index}`}
                        >
                          <option value="default" hidden>
                            Виберіть камінь...
                          </option>
                          {allStones.map(item => {
                            return (
                              <option value={item.value} key={item.value}>
                                {item.name}
                              </option>
                            );
                          })}
                        </Field>
                        {index !== arr.length - 1 && (
                          <button
                            className={styles.btnAdd}
                            type="button"
                            onClick={() => remove(index)}
                          >
                            &#8722;
                          </button>
                        )}
                      </div>
                      <ErrorMessage
                        className={styles.error}
                        name={`stones.${index}`}
                        component="div"
                      />
                    </div>
                  ))}
              </>
            )}
          </FieldArray>
          <p className={styles.title}>Фото (розмір 280х260), 2 штуки:</p>
          <Field name="images">
            {() => (
              <input
                type="file"
                multiple
                accept="image/*, .png, .jpeg, .gif, .webp"
                onChange={event => {
                  setFieldValue('images', event.currentTarget.files);
                }}
              />
            )}
          </Field>
          <div className={styles.wrapper}>
            {values.images ? (
              [...values.images].map((image, index) => (
                <div className={styles.thumb} key={index}>
                  <Image
                    className={styles.img}
                    src={URL.createObjectURL(image)}
                    width={210}
                    height={196}
                    alt={index}
                  />
                </div>
              ))
            ) : (
              <div className={styles.thumb}>
                <Image
                  className={styles.img}
                  src={imgPlaceholder}
                  width={210}
                  height={196}
                  alt="No image"
                  priority
                />
              </div>
            )}
          </div>
          <ErrorMessage
            className={styles.error}
            name="images"
            component="div"
          />
          <p className={styles.title}>Фото (розмір 568х324), 1 штука:</p>
          <Field name="wideImage">
            {() => (
              <input
                className={styles.input}
                type="file"
                accept="image/*,.png, .jpeg, .webp"
                onChange={event => {
                  if (event.target.value === '') return;
                  else setFieldValue('wideImage', event.currentTarget.files);
                }}
              />
            )}
          </Field>
          {values.wideImage ? (
            <div className={styles.wideThumb}>
              <Image
                className={styles.wideImg}
                src={URL.createObjectURL(values.wideImage[0])}
                width={335}
                height={191}
                alt="Jewelry"
              />
            </div>
          ) : (
            <div className={styles.wideThumb}>
              <Image
                className={styles.wideImg}
                src={imgPlaceholder}
                width={335}
                height={191}
                alt="No image"
                priority
              />
            </div>
          )}
          <ErrorMessage
            className={styles.error}
            name="wideImage"
            component="div"
          />
          <label className={styles.lable}>
            Ціна:
            <div>
              <Field
                className={styles.inputNumber}
                type="number"
                name="price"
              />
              <span>грн.</span>
            </div>
          </label>
          <ErrorMessage className={styles.error} name="price" component="div" />
          <button
            className={styles.button}
            type="submit"
            aria-label="add product"
            disabled={isSubmitting}
          >
            Додати товар
          </button>
        </Form>
      )}
    </Formik>
  );
}
