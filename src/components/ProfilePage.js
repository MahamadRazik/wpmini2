// ProfilePage.js
import React, { useState } from 'react';
import './ProfilePage.css';  // Create a CSS file for profile styling

const ProfilePage = () => {
  // Sample user data (You can replace this with data fetched from an API in the future)
  const [user] = useState({
    name: 'YASHWANTH S N',
    email: 'SNYASHWANTH@example.com',
    bio: 'A passionate web developer with a love for creating beautiful and functional websites.',
    profilePicture: 'https://via.placeholder.com/150',  // Placeholder image
  });

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-picture">
          <img src={user.profilePicture} alt="Profile" />
        </div>
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-email">{user.email}</p>
        <p className="profile-bio">{user.bio}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
