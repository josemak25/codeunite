import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import MobileUserPosts from './UserPosts/MobileUserPosts';
import MobileAddPost from './AddPost/MobileAddPost';
import MobileStats from './Stats/MobileStats';
import DesktopUserPosts from './UserPosts/DesktopUserPosts';
import DesktopStats from './Stats/DesktopStats';
import DesktopAddPost from './AddPost/DesktopAddPost';
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
          <Route exact path="/dashboard" component={MobileUserPosts} />
          <Route path="/dashboard/add" component={MobileAddPost} />
          <Route path="/dashboard/stats" component={MobileStats} />
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
              <NavLink key={i} to={pageLinks.links[i].path}>
                {icon}
              </NavLink>
            ))}
          </section>
          <div className={styles.desktopLogout}>
            <span className={styles.desktopLogoutIcon}>
              <i className="fas fa-sign-out-alt" />
            </span>
          </div>
        </section>
        <section className={styles.mainView}>
          {/* <Route exact path="/dashboard" component={DesktopStats} />
          <Route path="/dashboard/add" component={DesktopAddPost} />
          <Route path="/dashboard/stats" component={DesktopUserPosts} /> */}
        </section>
      </section>
    </>
  );
};

export default Dashboard;
