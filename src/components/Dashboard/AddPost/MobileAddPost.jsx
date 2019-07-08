import React from 'react';
import styles from './AddPost.module.css';

export default function MobileAddPost() {
  return (
    <article>
      <form className={styles.form}>
        <div className={styles.formField}>
          <label style={styles.label}>Title</label>
          <input type="text" style={styles.input} />
          <label style={styles.label}>Desc</label>
          <input type="text" style={styles.input} />
          <label style={styles.label}>Body</label>
          <textarea style={styles.label} />
          <button style={styles.input}>Submit</button>
        </div>
      </form>
    </article>
  );
}
