'use client';

import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';

import styles from './DeleteStone.module.css';
import Modal from '../Modal/Modal';

export default function DeleteStone() {
  const [stones, setStones] = useState(null);
  const [stoneName, setStoneName] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchAllStones() {
      const response = await fetch('/api/all-stones', {
        cache: 'no-store',
        next: { revalidate: 0 },
      });
      const stonesData = await response.json();
      setStones(stonesData);
    }
    fetchAllStones();
  }, []);

  const handleDelete = async () => {
    const response = await fetch('/api/delete-stone', {
      method: 'DELETE',
      body: JSON.stringify(stoneName),
    });

    if (response.ok) {
      setStones(stones.filter(stone => stone.name !== stoneName));
      setShowModal(false);
      setStoneName('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      toast.success(`${stoneName} видалено`);
    } else toast.error('Помилка при видаленні, повторіть знову');
  };

  return (
    <>
      <ul className={styles.container}>
        {stones &&
          stones.map(({ name, value }) => (
            <li className={styles.item} key={value}>
              <span>{name}</span>
              <button
                className={styles.button}
                onClick={() => {
                  setStoneName(name);
                  setShowModal(true);
                }}
              >
                <svg className={styles.icon}>
                  <use href="/icons.svg#icon-delete"></use>
                </svg>
              </button>
            </li>
          ))}
      </ul>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <>
            <h3>Ви дійсно бажаєте видалити {stoneName}?</h3>
            <div style={{ paddingTop: '12px', paddingBottom: '12px' }}>
              <button className={styles.buttonDel} onClick={handleDelete}>
                Видалити
              </button>
            </div>
          </>
        </Modal>
      )}
    </>
  );
}
