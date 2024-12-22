'use client';

import toast from 'react-hot-toast';
import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import styles from './UpdateProductForm.module.css';
import { SELL_STATUS_ENUMS } from '@/constants/enums';

const updateProdSchema = Yup.object().shape({
  price: Yup.number()
    .integer('Ціна повинна бути цілим числом')
    .moreThan(0, 'Ціна повинна бути більше 0')
    .required("Ціна обов'язкова"),
  sell_status: Yup.string()
    .oneOf(Object.values(SELL_STATUS_ENUMS))
    .required("Статус обов'язкова"),
});

export default function UpdateProductForm() {
  const [code, setCode] = useState('');
  const [product, setProduct] = useState(null);

  const handleClick = async () => {
    if (code === '') return toast.error('Вкажіть код товару');

    const response = await fetch(`/api/search-product-code/${code}`);

    if (response.ok) {
      toast.success('Товар знайдено');
      const productData = await response.json();
      setProduct({
        price: productData.price,
        sell_status: productData.sell_status,
      });
    } else if (response.status === 404) {
      toast.error('Товар не знайдено');
    } else toast.error('Помилка при пошуку, повторіть знову');
  };

  const handleSubmit = async (values, { resetForm }) => {
    //    const response = await fetch('/api/delete-product', {
    //      method: 'DELETE',
    //      body: JSON.stringify(values.code),
    //    });
    //    console.log(response);
    //    if (response.ok) {
    //      resetForm();
    //      toast.success('Товар видалений');
    //    } else if (response.status === 404) {
    //      toast.error('Товар не знайдено');
    //    } else toast.error('Помилка при збереженні, повторіть знову');
  };

  return (
    <>
      <div className={styles.container}>
        <input
          className={styles.inputField}
          type="text"
          placeholder="Код товару"
          pattern="^[0-9]*$"
          maxLength={4}
          value={code}
          onChange={evt => setCode(evt.target.value)}
        />
        <button
          className={styles.searchBtn}
          type="button"
          onClick={handleClick}
        >
          Знайти
        </button>
      </div>
      {product && (
        <Formik
          initialValues={product}
          validationSchema={updateProdSchema}
          enableReinitialize={true}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <label className={styles.label}>
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
              <ErrorMessage
                className={styles.error}
                name="price"
                component="div"
              />
              <p className={styles.title}>Статус:</p>
              <div className={styles.box}>
                {Object.values(SELL_STATUS_ENUMS).map((status, index) => {
                  return (
                    <label key={index} className={styles.categoryLabel}>
                      <Field type="radio" name="sell_status" value={status} />
                      {status}
                    </label>
                  );
                })}
              </div>
              <ErrorMessage
                className={styles.error}
                name="category"
                component="div"
              />
              <button
                className={styles.button}
                type="submit"
                aria-label="delete product"
                disabled={isSubmitting}
              >
                Оновити товар
              </button>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
}
