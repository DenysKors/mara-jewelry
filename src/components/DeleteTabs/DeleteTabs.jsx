'use client';

import { useState } from 'react';

import DeleteStone from '../DeleteStone/DeleteStone';
import DeleteProduct from '../DeleteProduct/DeleteProduct';
import DeleteArticle from '../DeleteArticle/DeleteArticle';
import styles from './DeleteTabs.module.css';

export default function DeleteTabs() {
  const [tabId, setTabId] = useState(0);

  const handleClick = evt => {
    switch (evt.currentTarget.id) {
      case 'tab-0':
        setTabId(0);
        break;
      case 'tab-1':
        setTabId(1);
        break;
      case 'tab-2':
        setTabId(2);
        break;
      default:
        setTabId(0);
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <button
          className={`${tabId === 0 ? styles.button_active : styles.button}`}
          type="button"
          id="tab-0"
          onClick={handleClick}
        >
          Товар
        </button>
        <button
          className={`${tabId === 1 ? styles.button_active : styles.button}`}
          type="button"
          id="tab-1"
          onClick={handleClick}
        >
          Стаття
        </button>
        <button
          className={`${tabId === 2 ? styles.button_active : styles.button}`}
          type="button"
          id="tab-2"
          onClick={handleClick}
        >
          Камінь
        </button>
      </div>
      {tabId === 0 && <DeleteProduct />}
      {tabId === 1 && <DeleteArticle />}
      {tabId === 2 && <DeleteStone />}
    </>
  );
}
