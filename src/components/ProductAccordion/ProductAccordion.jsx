'use client';

import { useState } from 'react';
import styles from './ProductAccordion.module.css';

export default function ProductAccordion() {
  const [isActive, setIsActive] = useState(false);

  const handleBtnClick = evt => {
    const icon = evt.target.firstElementChild;
    const panel = evt.target.nextElementSibling;
    setIsActive(!isActive);
    panel.classList.toggle(`${styles.showPanel}`);
    icon.classList.toggle(`${styles.btnIconRotate}`);
  };

  return (
    <>
      <button
        className={styles.accordion}
        type="button"
        aria-label="show/hide text"
        onClick={handleBtnClick}
      >
        Догляд за прикрасами
        <svg className={styles.btnIcon}>
          <use href="/icons.svg#icon-Vector"></use>
        </svg>
      </button>
      <div className={styles.panel}>
        <ul className={styles.list}>
          <li>
            Уникайте контакту з агресивними речовинами: намагайтеся уникати
            контакту прикрас з хімічними речовинами, парфумами, лаками для
            волосся та іншими агресивними речовинами, оскільки вони можуть
            пошкодити натуральне каміння
          </li>
          <li>
            Зберігайте прикраси окремо: щоб уникнути подряпин та пошкоджень,
            рекомендується зберігати прикраси окремо в спеціальних шкатулках або
            м&apos;яких тканинах, які запобігають контакту з іншими металевими
            або твердими предметами
          </li>
          <li>
            Уникайте контакту з водою: для запобігання пошкодженню каменів
            рекомендується уникати контакту прикрас з водою, особливо якщо вони
            мають пористу структуру, таку як корал, перлини або турмалін
          </li>
          <li>
            Почистіть прикраси м&apos;якою тканиною: після кожного використання
            прикраси можна злегка витерти м&apos;якою тканиною, щоб видалити
            сліди бруду або забруднення
          </li>
          <li>
            Періодичне професійне обслуговування: рекомендується періодично
            звертатися до професіоналів, які спеціалізуються на обслуговуванні
            прикрас з натурального каміння, вони зможуть видалити більш складні
            забруднення та відновити блиск каменів
          </li>
        </ul>
        <p className={styles.text}>
          <b>
            За дотриманням цих доглядових рекомендацій Ваші прикраси з
            натурального каміння будуть зберігати свою красу та блиск тривалий
            час
          </b>
        </p>
      </div>
      <button
        className={styles.accordion}
        type="button"
        aria-label="show/hide text"
        onClick={handleBtnClick}
      >
        Умови оплати та доставки
        <svg className={styles.btnIcon}>
          <use href="/icons.svg#icon-Vector"></use>
        </svg>
      </button>
      <div className={styles.panel}>
        <ul className={styles.list}>
          <li>
            Доставка здійснюється за допомогою служб доставки &quot;Нова
            пошта&quot; та &quot;Укрпошта&quot;
          </li>
          <li>
            Вартість доставки прикрас НЕ входить у загальну вартість замовлення
            і розраховується окремо
          </li>
          <li>
            Для зручності Ви можете обрати один із двох варіантів оплати:
            <ol>
              <li>
                Повна оплата: сплачується повна сума замовлення за обраним
                зручним способом перед його відправленням
              </li>
              <li>
                Розстрочена оплата: сплачується 50% від суми замовлення перед
                початком його виконання, а решта 50% сплачується після
                завершення виконання замовлення
              </li>
            </ol>
          </li>
        </ul>
        <p className={styles.text}>
          <b>
            &#42;&#42;Будь ласка, зверніть увагу, що вартість доставки не
            включена у вартість прикрас і буде розрахована окремо
          </b>
        </p>
      </div>
      <button
        className={styles.accordion}
        type="button"
        aria-label="show/hide text"
        onClick={handleBtnClick}
      >
        Правила повернення
        <svg className={styles.btnIcon}>
          <use href="/icons.svg#icon-Vector"></use>
        </svg>
      </button>
      <div className={styles.panel}>
        <ul className={styles.list}>
          <li>
            Згідно з чинним законодавством, прикраси не підлягають поверненню
          </li>
          <li>
            Вартість доставки прикрас НЕ входить у загальну вартість замовлення
            і розраховується окремо
          </li>
          <li>
            Оскільки прикраси створюються спеціально для замовника, перед
            виготовленням здійснюється узгодження ескізу замовлення з самим
            замовником
          </li>
          <li>
            Важливо зазначити, що прикраси мають сакральне значення, тому вони
            повинні бути чистими не лише від звичайного бруду, а й від
            енергетики сторонніх осіб
          </li>
        </ul>
        <p className={styles.text}>
          <b>
            &#42;&#42;Зверніть увагу, що у зв&apos;язку з особливостями
            виготовлення та природою прикрас, вони не можуть бути повернені
            після придбання.
          </b>
        </p>
      </div>
    </>
  );
}
