import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import UserPosts from './UserPosts';
import AddPost from './AddPost';
import Stats from './Stats';

import userImg from '../../img/users-5.svg';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <section className={styles.main}>
      <section className={styles.profile}>
        <span className={styles.logout}>
          <i
            className="fas fa-sign-out-alt"
            style={{ transform: 'rotate(180deg)', color: '#ff6384' }}
          />
        </span>
        <section>
          <div className={styles.imageContainer}>
            <img src={userImg} alt="user Profile" />
          </div>
          <h3>Anna Smith</h3>
          <span className={styles.totalView}>
            <i
              className="fas fa-heart"
              style={{ color: '#ff6384', fontSize: '1.5rem' }}
            />
            352
          </span>
          <div className={styles.links}>
            <NavLink to="/dashboard/">POSTS</NavLink>
            <NavLink to="/dashboard/add">ADD</NavLink>
            <NavLink to="/dashboard/stats">STATS</NavLink>
          </div>
        </section>
      </section>
      <section className={styles.articlesSection}>
        <Route exact path="/dashboard" component={UserPosts} />
        <Route path="/dashboard/add" component={AddPost} />
        <Route path="/dashboard/stats" component={Stats} />
      </section>
    </section>
  );
};

export default Dashboard;
