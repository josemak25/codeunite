import React from 'react';
import profile from './Profile.css';

const Profile = () => {
  return (
    <div className="profile" style={profile}>
      <img
        src="https://randomuser.me//api//portraits//men//43.jpg"
        alt="user"
        className="profile-img"
      />
      <span>
        <h4>
          Personal blog by <a href="">Amakiri Joseph</a>.
        </h4>
        <h4>I bring the code right to you</h4>
      </span>
    </div>
  );
};

export default Profile;
