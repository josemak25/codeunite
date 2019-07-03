import React from 'react';
import styles from './Post.module.css';

const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <h3 className={styles.post_title}>
          <a to="/">Name It, and They Will Come</a>
        </h3>
        <small className={styles.postSmall}>
          March 25, 2019 • ☕️ 4 min read
        </small>
      </header>
      <p className={styles.post_desc}>A change starts with a story.</p>
    </article>
  );
};

export default Post;
