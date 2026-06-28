import styles from './StatsPanel.module.css';

// Props: stats — array of { label, value, accent? }
export default function StatsPanel({ stats }) {
  return (
    <div className={styles.panel}>
      <p className={styles.panelTitle}>Today's network</p>
      <div className={styles.grid}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.metric}>
            <p className={styles.metricLabel}>{stat.label}</p>
            <p
              className={styles.metricValue}
              style={stat.accent ? { color: stat.accent } : {}}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
