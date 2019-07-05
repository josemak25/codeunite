import React from 'react';
import styles from './UserPosts.module.css';
import UserPost from './UsePost';

const UserPosts = () => {
  const testArray = [1, 2, 3, 3, 4, 4, 4, 4, 4];
  return (
    <article className={styles.postContainer}>
      {testArray.map((post, i) => (
        <UserPost />
      ))}
    </article>
  );
};

export default UserPosts;
