'use client';

import { useState } from 'react';
import Image from 'next/image';

import styles from './Footer.module.css';
import Logo from '../../assets/images/Logo.png';
import Modal from '../Modal/Modal';
import ModalAbout from '../ModalAbout/ModalAbout';
import ModalTerms from '../ModalTerms/ModalTerms';

export default function Footer() {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <footer className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Image
            src={Logo}
            className={styles.image}
            alt="Mara Jewelry Logo"
            priority
          />
          <div className={styles.box}>
            <a
              className={styles.link}
              href="https://www.instagram.com/mara_jewelryua?igsh=MTN5emJhbTNsc2NnYQ=="
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
            >
              <svg width="16" height="16">
                <use href="./icons.svg#icon-instagram"></use>
              </svg>
            </a>
            <a
              className={styles.link}
              href="https://t.me/+380992687868"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Telegram"
            >
              <svg width="16" height="16">
                <use href="./icons.svg#icon-telegram"></use>
              </svg>
            </a>
          </div>
        </div>
        <ul className={styles.list}>
          <li>
            <b>Інформація</b>
          </li>
          <li>
            <button
              className={styles.button}
              type="button"
              onClick={() => setShowAboutModal(true)}
            >
              Про Mara Jewelry
            </button>
            {showAboutModal && (
              <Modal onClose={() => setShowAboutModal(false)}>
                <ModalAbout />
              </Modal>
            )}
          </li>
          <li>
            <button
              className={styles.button}
              type="button"
              onClick={() => setShowTermsModal(true)}
            >
              Оплата та доставка
            </button>
            {showTermsModal && (
              <Modal onClose={() => setShowTermsModal(false)}>
                <ModalTerms />
              </Modal>
            )}
          </li>
        </ul>
      </div>
      <div className={styles.copyBox}>
        <span className={styles.copy}>
          &copy; 2024 MaraJewelry, All Rights Reserved
        </span>
        <span className={styles.dev}>Created by DenExplorer</span>
      </div>
    </footer>
  );
}
