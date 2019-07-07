import React from 'react';
import styles from './Stats.module.css';
import ProgressBar from './ProgressBar';

const UsePost = () => {
  const graphs = [
    {
      title: 'Views',
      num: 43
    },
    {
      title: 'Likes',
      num: 89
    }
  ];
  return (
    <section className={styles.statsHolder}>
      <div className={styles.viewCard}>
        <h3>Anna Smith</h3>
        <h5>Joined 2 years ago</h5>
        {graphs.map((graph, i) => (
          <ProgressBar
            views={graph.num}
            title={graph.title}
            marginTop="0.4rem"
            key={i}
          />
        ))}
      </div>
      <div className={styles.overallGraph}>
        <span>Overall Progress</span>
        <div className={styles.graph} />
      </div>
    </section>
  );
};

export default UsePost;
