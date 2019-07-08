import React, { useState } from 'react';
import Logo from './Logo';
import styles from './Login.module.css';

import loginImg from '../../img/loginProfile.png';
import signUpImg from '../../img/signUpProfile.png';

const Login = () => {
  const [signUp, setSignUp] = useState(false);

  const handleChange = () => {
    setSignUp(!signUp);
    console.log(signUp);
  };

  if (signUp) {
    const signUpStyle = {
      label: { marginBottom: '0' },
      input: { marginBottom: '0.5rem' }
    };
    return (
      <div className={styles.container}>
        <section className={styles.header}>
          <Logo
            designCuts={{
              beforeCut: '20px',
              afterCut: '32px',
              fontSize: '5rem'
            }}
          />
          <div className={styles.signIn}>SIGN UP</div>
        </section>
        <section className={styles.form}>
          <form>
            <div className={styles.formImg}>
              <img src={signUpImg} alt="sign-in" />
            </div>
            <div className={styles.formField}>
              <label style={signUpStyle.label}>Username</label>
              <input type="text" style={signUpStyle.input} />
              <label style={signUpStyle.label}>Email</label>
              <input type="text" style={signUpStyle.input} />
              <label style={signUpStyle.label}>Password</label>
              <input type="text" style={signUpStyle.input} />
              <button style={signUpStyle.input}>Submit</button>
              <div className={styles.signUp} onClick={handleChange}>
                Sign in
              </div>
            </div>
          </form>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <Logo
          designCuts={{ beforeCut: '20px', afterCut: '32px', fontSize: '5rem' }}
        />
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
            <div className={styles.signUp} onClick={handleChange}>
              Sign up
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
