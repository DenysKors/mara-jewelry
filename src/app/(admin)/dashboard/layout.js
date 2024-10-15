export default function DashboardLayout({ children }) {
  return (
    <>
      <header className={styles.header}>
        {/* <Image
          src={Logo}
          className={styles.image}
          alt="Mara Jewelry Logo"
          priority
        /> */}
      </header>
      {children}
      <footer className={styles.footer}>
        <div className={styles.copyBox}>
          <span className={styles.copy}>
            &copy; 2024 MaraJewelry, All Rights Reserved
          </span>
          <span className={styles.dev}>Created by DenExplorer</span>
        </div>
      </footer>
    </>
  );
}
