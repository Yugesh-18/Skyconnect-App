import styles from './Header.module.css';

const NAV_TABS = ['Flights', 'My Bookings', 'Check-In', 'Support'];

// Props: airlineName, tagline, activeTab, onTabChange
export default function Header({ airlineName, tagline, activeTab, onTabChange }) {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>✦</div>
          <div>
            <p className={styles.airlineName}>{airlineName}</p>
            <p className={styles.tagline}>{tagline}</p>
          </div>
        </div>
        <span className={styles.badge}>Live</span>
      </div>

      <nav className={styles.nav}>
        {NAV_TABS.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
    </header>
  );
}
