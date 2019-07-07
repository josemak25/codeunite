import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import UserPosts from './UserPosts/UserPosts';
import AddPost from './AddPost/AddPost';
import Stats from './Stats/Stats';
import Logo from '../Registration/Logo';

import userImg from '../../img/users-5.svg';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const pageLinks = {
    links: [
      {
        name: 'POSTS',
        path: '/dashboard/'
      },
      {
        name: 'ADD',
        path: '/dashboard/add'
      },
      {
        name: 'STATS',
        path: '/dashboard/stats'
      }
    ],
    desktopIcons: [
      <i className="fas fa-blog" />,
      <i className="fab fa-readme" />,
      <i className="fas fa-chart-bar" />
    ],
    desktopDes: [
      <i className="fas fa-bell" />,
      <i className="fas fa-envelope" />
    ]
  };
  return (
    <>
      {/* Mobile version */}

      <section className={styles.MobileVersion}>
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
              {pageLinks.links.map((link, i) => (
                <NavLink to={link.path} key={i}>
                  {link.name}
                </NavLink>
              ))}
            </div>
          </section>
        </section>
        <section className={styles.articlesSection}>
          <Route exact path="/dashboard" component={UserPosts} />
          <Route exact path="/dashboard/add" component={AddPost} />
          <Route path="/dashboard/stats" component={Stats} />
        </section>
      </section>

      {/* Desktop version */}

      <section className={styles.DesktopVersion}>
        <section className={styles.desktopSidebar}>
          <div className={styles.desktopLogo}>
            <Link to="/">
              <Logo
                designCuts={{
                  beforeCut: '13px',
                  afterCut: '24px',
                  fontSize: '4rem',
                  sudoColor: '#fff',
                  afterHeight: '0',
                  afterShadow: '0px 0px 15px 4px rgb(160, 160, 160)'
                }}
              />
            </Link>
          </div>
          <div className={styles.userPicture}>
            <img src={userImg} alt="dashboard profile" />
          </div>
          <section className={styles.desktopIcons}>
            {pageLinks.desktopIcons.map((icon, i) => (
              <div key={i}>{icon}</div>
            ))}
          </section>
          <div className={styles.desktopLogout}>
            <span className={styles.desktopLogoutIcon}>
              <i className="fas fa-sign-out-alt" />
            </span>
          </div>
        </section>
        <section className={styles.mainView}>
          <header>
            <div>
              <h5>Dashboard</h5>
            </div>
            <div className={styles.desktopNotification}>
              {pageLinks.desktopDes.map((icon, i) => (
                <span key={i}>{icon}</span>
              ))}
            </div>
          </header>
          <section className={styles.desktopStatsOverView}>
            <div className={styles.desktopUserComments}>user comments</div>
            <div className={styles.desktopOverAllStats}>
              {' '}
              overall statistics
            </div>
          </section>
          <section className={styles.desktopMaxGraph}>
            <div className={styles.desktopMaxGraphMini}>view stats</div>
            <div className={styles.desktopMaxGraphMessage}>congrats view</div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Dashboard;
