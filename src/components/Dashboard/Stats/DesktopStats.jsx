import React from 'react';
import UserPost from '../UserPosts/UserPost';
import ProgressBar from './ProgressBar';
import styles from './Stats.module.css';
import { userOne, userTwo, userFive } from '../../../utils/Helpers';
import userImg from '../../../img/users-5.svg';

const DesktopStats = () => {
  const pageLinks = {
    desktopDes: [
      <i className="fas fa-bell" />,
      <i className="fas fa-envelope" />
    ],

    desktopComments: [
      {
        img: userOne,
        comment: `We know! you felt it too that finding our new address was difficult for some We know! 
                you felt it too that finding our new address was difficult for some`
      },
      {
        img: userTwo,
        comment: `We know! you felt it too that finding our new address was difficult for some We know!`
      },
      {
        img: userFive,
        comment: `We know! difficult for some We know! you felt it too that finding our new address was difficult for some`
      }
    ],

    graphsMini: [
      {
        title: 'Views',
        num: 43
      },
      {
        title: 'Likes',
        num: 89
      }
    ]
  };

  return (
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
        <div className={styles.desktopUserComments}>
          <h6>Top viewed post comments</h6>
          {pageLinks.desktopComments.map((user, i) => (
            <UserPost image={user.img} text={user.comment} key={i} />
          ))}
        </div>
        <div className={styles.desktopOverAllStats}>
          {' '}
          <h6>overall statistics</h6>
        </div>
      </section>
      <section className={styles.desktopMaxGraph}>
        <div className={styles.desktopMaxGraphMini}>
          <h6>View stats</h6>
          {pageLinks.graphsMini.map((graph, i) => (
            <ProgressBar
              views={graph.num}
              title={graph.title}
              marginTop="2rem"
              key={i}
            />
          ))}
        </div>
        <section className={styles.desktopUserGreetingMessage}>
          <img src={userImg} alt="greetings message" />
          <div>
            <h6>Morning David</h6>
            <p>Your post for the last 24hrs reached 300 users</p>
            <span>
              <h5>02:54 PM</h5>
            </span>
          </div>
        </section>
      </section>
    </section>
  );
};

export default DesktopStats;
