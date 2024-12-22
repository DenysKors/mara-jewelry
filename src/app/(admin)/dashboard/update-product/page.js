import styles from './page.module.css';
import UpdateProductForm from '@/components/UpdateProductForm/UpdateProductForm';

export default function UpdateProduct() {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Оновити товар</h3>
      <UpdateProductForm />
    </section>
  );
}
