import React from 'react';
import UserPost from './UserPost';

const UserPosts = () => {
  const testArray = [1, 2, 3, 3];
  const text =
    'You can now view codeunite in the browser.You can now view codeunite in the browser.';

  const image = 'https://img.icons8.com/bubbles/100/000000/secured-letter.png';
  return (
    <article style={postContainer}>
      {testArray.map((post, i) => (
        <UserPost key={i} text={text} image={image} />
      ))}
    </article>
  );
};

export default UserPosts;

const postContainer = {
  height: '100%',
  overflowY: 'scroll'
};
