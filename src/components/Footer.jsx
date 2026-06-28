import styles from './Footer.module.css';

const LINKS = ['Help', 'About', 'Status'];

// Props: version (string)
export default function Footer({ version }) {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>✦ SkyConnect · {version}</p>
      <nav className={styles.links}>
        {LINKS.map((link) => (
          <button key={link} className={styles.link}>{link}</button>
        ))}
      </nav>
    </footer>
  );
}
