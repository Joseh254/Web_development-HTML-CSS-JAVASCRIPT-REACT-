
import React from 'react';
import useStore from './store';
import './Followers.css'

function Followers() {
  const followers = useStore((state) => state.followersData);

  if (!followers) {
    return null;
  }

  return (
    <div className="followers">
      <h2>Followers</h2>
      <div className="followers-list">
        {followers.map((follower) => (
          <div key={follower.id} className="follower-item">
            <img src={follower.avatar_url} alt={`${follower.login} avatar`} />
            <a href={follower.html_url} target="_blank" rel="noopener noreferrer">
              {follower.login}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Followers;
