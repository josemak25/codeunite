import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts(setPosts);
  }, []);

  return (
    <main>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </main>
  );
};

export default PostList;

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
