import React from 'react';
import Post from '../Post/Post';

const PostList = ({ posts }) => {
  return (
    <main>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </main>
  );
};

export default PostList;
