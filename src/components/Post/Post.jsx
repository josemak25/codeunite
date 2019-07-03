import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/Helpers';
import styles from './Post.module.css';

const Post = ({ post }) => {
  const { title, description, pubDate } = post;
  return (
    <article className={styles.post}>
      <header>
        <h3 className={styles.post_title}>
          <Link to={`/${title}`}>{title}</Link>
        </h3>
        <small className={styles.postSmall}>{formatDate(pubDate)}</small>
      </header>
      <p className={styles.post_desc}>{description}.</p>
      <div className={styles.rating}>
        <button className={styles.ratingButton}>
          <span className={styles.icon}>
            <i class="fas fa-heart" />
          </span>
          <p>112</p>
        </button>
        <button className={styles.ratingButton}>
          <span className={styles.icon}>
            <i class="far fa-eye" />
          </span>
          <p>430</p>
        </button>
      </div>
    </article>
  );
};

export default Post;
