import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UsePost = ({ text, image }) => {
  return (
    <PostMain>
      <PostImage>
        <span>
          <img src={image} alt="avatar" />
        </span>
      </PostImage>
      <PostDesc>
        <h4>React Hooks</h4>
        <div>
          <p>{text}</p>
          <Link to=".">
            Read More{' '}
            <span>
              <i className="fas fa-arrow-right" />
            </span>
          </Link>
        </div>
      </PostDesc>
    </PostMain>
  );
};

export default UsePost;

const PostMain = styled.main`
  background: #fff;
  height: 25%;
  display: flex;
  align-items: center;
  font-size: 0.5rem;
  padding: 0 1rem;
  border-radius: 3px;
  margin-bottom: 0.5rem;
`;

const PostImage = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 45px;
  box-shadow: 0px 0px 7px -2px rgba(34, 34, 34, 1);

  span {
    display: inline-block;
    height: 45px;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 45px;
    background: #ffa7c4;
  }

  span img {
    height: 40px;
    width: 40px;
  }
`;

const PostDesc = styled.div`
  margin-left: 1rem;

  h4 {
    margin: 0;
    font-size: 0.5rem;
    font-weight: 600;
  }

  p {
    margin: 0.3rem 0;
  }

  a {
    font-weight: 600;
  }
`;
