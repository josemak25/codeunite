import React from 'react';
import styles from './Login.module.css';

import loginImg from '../../img/profile.png';

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
          <div className={styles.formImg}>
            <img src={loginImg} alt="sign-in" />
          </div>
          <div className={styles.formField}>
            <label>Username</label>
            <input type="text" />
            <label>Password</label>
            <input type="text" />
            <button>Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
