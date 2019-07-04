import React from 'react';
import Header from './Header/Header';
import Profile from './Profile/Profile';
import PostList from './PostList/PostList';
import Footer from './Footer/Footer';
import container from '../../App.css';

const Homepage = () => {
  return (
    <div style={root}>
      <div className="container" style={container}>
        <Header />
        <Profile />
        <PostList />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;

const root = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
