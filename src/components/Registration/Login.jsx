import React from 'react';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <div className={styles.logo}>
          <span>C</span>U
        </div>
        <div className={styles.signIn}>SIGN IN</div>
      </section>
      <section className={styles.form}>
        <form>
          <div>
            <img src="" alt="" />
            IMAGE
          </div>
          <div>
            <label>Username</label>
            <input type="text" />
            <label>Password</label>
            <input type="text" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
