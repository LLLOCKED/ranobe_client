import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div>
          <ul>
            <li>Останні новели</li>
            <li>Популярні новели</li>
            <li>Нові новели</li>
          </ul>
        </div>
        <div> © {new Date().getFullYear()} RanobeUA.com</div>
      </div>
    </footer>
  );
};
