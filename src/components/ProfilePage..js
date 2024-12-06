import React, { useState, useEffect } from 'react';
import './ProfilePage.css'; // Importing CSS for styling (we'll cover this below)

const ProfilePage = () => {
  // Sample user data (could be fetched from an API)
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'A passionate developer with a love for coding and open-source.',
    profilePicture: 'https://via.placeholder.com/150', // Placeholder image
  });

  // Effect hook for future API fetching (if needed)
  useEffect(() => {
    // You can fetch user data from an API here
    // Example: fetchUserDetails().then(data => setUser(data));
  }, []);

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
