import styles from './page.module.css';
import AddStoneForm from '@/components/AddStoneForm/AddStoneForm';

export default async function AddStone() {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Додати камінь</h3>
      <AddStoneForm />
    </section>
  );
}
