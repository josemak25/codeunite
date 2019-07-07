import React from 'react';
import styles from './Stats.module.css';

const ProgressBar = ({ views, title, marginTop }) => {
  return (
    <section style={{ marginTop: marginTop }}>
      <div className={styles.progressHeader}>
        <span style={headerText}>{title}</span>
        <span className={styles.viewCount}>{views}</span>
      </div>
      <div className="progress" style={{ height: '8px' }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${views}%`,
            background: 'linear-gradient(90deg, #f5f28f, #ffa7c4)'
          }}
          aria-valuenow="15"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </section>
  );
};

export default ProgressBar;

const headerText = {
  fontSize: '0.5rem',
  fontWeight: '500',
  color: '#66717a'
};
