import React from 'react';
import Header from '../Homepage/Header/Header';
import Profile from '../Homepage/Profile/Profile';
import container from './ReadPost.css';
import Post from '../Homepage/Post/Post';

const ReadPost = ({ location }) => {
  const { title, pubDate, content } = location.state;
  const post = { title, pubDate };

  return (
    <div style={root}>
      <div className="container" style={container}>
        <Header postPage={true} />
        <main>
          <Post post={post} />
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </main>
        <Profile />
      </div>
    </div>
  );
};

export default ReadPost;

const root = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
