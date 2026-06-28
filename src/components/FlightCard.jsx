import styles from './FlightCard.module.css';

const STATUS_STYLES = {
  'On Time':  { bg: '#e1f5ee', color: '#0f6e56' },
  'Boarding': { bg: '#eeedfe', color: '#534ab7' },
  'Delayed':  { bg: '#faeeda', color: '#854f0b' },
  'Cancelled':{ bg: '#fcebeb', color: '#a32d2d' },
};

// Reusable component — Props: flightNumber, origin, destination,
//   dep (departure time), arr (arrival time), gate, status, aircraft
export default function FlightCard({
  flightNumber, origin, destination,
  dep, arr, gate, status, aircraft,
}) {
  const statusStyle = STATUS_STYLES[status] || STATUS_STYLES['On Time'];

  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div>
          <p className={styles.label}>Flight</p>
          <p className={styles.flightNumber}>{flightNumber}</p>
        </div>
        <span
          className={styles.statusBadge}
          style={{ background: statusStyle.bg, color: statusStyle.color }}
        >
          {status}
        </span>
      </div>

      <div className={styles.route}>
        <div className={styles.city}>
          <p className={styles.time}>{dep}</p>
          <p className={styles.iata}>{origin}</p>
        </div>
        <div className={styles.line}>
          <div className={styles.dashed} />
          <span className={styles.plane}>✈</span>
          <p className={styles.aircraft}>{aircraft}</p>
        </div>
        <div className={styles.city}>
          <p className={styles.time}>{arr}</p>
          <p className={styles.iata}>{destination}</p>
        </div>
      </div>

      <div className={styles.cardBottom}>
        <span className={styles.gateText}>
          Gate <strong>{gate}</strong>
        </span>
        <span className={styles.hint}>Tap for details →</span>
      </div>
    </div>
  );
}
