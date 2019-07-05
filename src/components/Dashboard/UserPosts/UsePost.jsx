import React from 'react';
import styles from './UserPosts.module.css';

const UsePost = () => {
  return (
    <main>
      <div className={styles.postImage}>
        <span>
          <img src="https://img.icons8.com/bubbles/100/000000/secured-letter.png" />
        </span>
      </div>
      <div className={styles.postDesc}>
        <h4>React Hooks</h4>
        <div>
          <p>
            You can now view codeunite in the browser.You can now view codeunite
            in the browser.
          </p>
          <a href="">
            Read More{' '}
            <span>
              <i className="fas fa-arrow-right" />
            </span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default UsePost;
