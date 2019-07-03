import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Post from './components/Post/Post';
import container from './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts(setPosts);
  }, []);

  return (
    <div style={root}>
      <div className="container" style={container}>
        <Header />
        <Profile />
        <Router>
          <main>
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </main>
        </Router>
      </div>
    </div>
  );
}

export default App;

const root = {
  border: '2px black solid',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const fetchPosts = async setPosts => {
  const API_KEY = '8aiqwmdcl8mtsrzaicgkii4thquj7fl1tu3g6ni9';
  const URL = 'https%3A%2F%2Foverreacted.io%2Frss.xml';
  const response = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=${URL}&api_key=${API_KEY}&order_dir=desc&count=100`
  );
  const result = await response.json();
  const { items } = result;
  setPosts(items);
};
