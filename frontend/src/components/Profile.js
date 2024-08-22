import React from 'react';
import { useLocation } from 'react-router-dom';

function Profile() {
  const { state } = useLocation();
  const { user } = state;

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <table>
        <tbody>
          <tr>
            <td><strong>Name:</strong></td>
            <td><strong>Email:</strong></td>
            <td><strong>Gender:</strong></td>
            <td><strong>Count:</strong></td>
            <td><strong>Last Login Date & Time:</strong></td>
          </tr>
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.count}</td>
            <td>{new Date(user.lastLoginDate).toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Profile;

