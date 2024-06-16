
import React from 'react';
import useStore from '../Store/Githubfinderstore';
import './Repositories.css';

function Repositories() {
  const repos = useStore((state) => state.reposData);

  if (!repos) {
    return null;
  }

  return (
    <div className="repositories">

      <h2>Repositories</h2>
      <div className="repos-list">

        {repos.map((repo) => (
          <div key={repo.id} className="repo-item">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </div>

        ))}
      </div>
      
    </div>
  );
}

export default Repositories;
