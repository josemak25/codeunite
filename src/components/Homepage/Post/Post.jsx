import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../../utils/Helpers';
import styles from './Post.module.css';
import { urlValidator } from '../../../utils/Helpers';

const Post = ({ post }) => {
  const { title, description, pubDate } = post;

  if (!description) {
    return (
      <article className={styles.post}>
        <header>
          <h3 className={styles.post_title} style={{ fontSize: '2.6rem', lineHeight: '1.1' }}>
            {title}{' '}
          </h3>
          <small className={styles.postSmall}>{formatDate(pubDate)}</small>
        </header>
      </article>
    );
  }

  return (
    <article className={styles.post}>
      <header>
        <h3 className={styles.post_title}>
          <Link
            to={{
              pathname: `/${urlValidator(title)}`,
              state: post
            }}
          >
            {title}
          </Link>
        </h3>
        <small className={styles.postSmall}>{formatDate(pubDate)}</small>
      </header>
      <p className={styles.post_desc}>{description}.</p>
      <div className={styles.rating}>
        <button className={styles.ratingButton}>
          <span className={styles.icon}>
            <i className="fas fa-heart" />
          </span>
          <p>112</p>
        </button>
        <button className={styles.ratingButton}>
          <span className={styles.icon}>
            <i className="far fa-eye" />
          </span>
          <p>430</p>
        </button>
      </div>
    </article>
  );
};

export default Post;
