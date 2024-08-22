import React from 'react';
import { useLocation } from 'react-router-dom';

function Profile() {
  const { state } = useLocation();
  const { user } = state;

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
      <p>Last Login Date: {new Date(user.lastLoginDate).toLocaleString()}</p>
    </div>
  );
}

export default Profile;
