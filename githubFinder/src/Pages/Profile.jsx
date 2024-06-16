
import React from 'react';
import useStore from './store';
import './Profile.css';

function Profile() {
  const userData = useStore((state) => state.userData);

  if (!userData) {
    return null;
  }

  return (
    <div className='user-details'>
      <img src={userData.avatar_url} alt={`${userData.login} avatar`} />
      <h2>{userData.name || userData.login}</h2>
      <p>{userData.bio}</p>
      <p>Followers: {userData.followers}</p>
      <p>Following: {userData.following}</p>
      <p>Public Repos: {userData.public_repos}</p>
      <a href={userData.html_url} target='_blank' rel='noopener noreferrer'>
        View Profile on GitHub
      </a>
    </div>
  );
}

export default Profile;
