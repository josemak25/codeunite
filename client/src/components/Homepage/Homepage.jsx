import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Profile from './Profile/Profile';
import PostList from './PostList/PostList';
import Footer from './Footer/Footer';
import container from '../../App.css';
import Spinner from './Spinner/Spinner';

const Homepage = () => {
  const [pageMount, setPageMount] = useState({
    loading: true,
    posts: []
  });

  const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  const fetchPosts = async milliseconds => {
    await sleep(milliseconds);

    const API_KEY = '8aiqwmdcl8mtsrzaicgkii4thquj7fl1tu3g6ni9';
    const URL = 'https%3A%2F%2Foverreacted.io%2Frss.xml';
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${URL}&api_key=${API_KEY}&order_dir=desc&count=100`
    );
    const result = await response.json();
    const { items } = result;

    setPageMount({
      loading: false,
      posts: items
    });
  };

  useEffect(() => {
    fetchPosts(2000);
  });

  return (
    <div style={root}>
      {pageMount.loading ? (
        <Spinner />
      ) : (
        <div className="container" style={container}>
          <Header />
          <Profile />
          <PostList posts={pageMount.posts} />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Homepage;

const root = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
