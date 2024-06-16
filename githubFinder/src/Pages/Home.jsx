
import React, { useState } from 'react';
import useStore from './store';
import { fetchGitHubUser } from './api';
import './Home.css';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const setUsername = useStore((state) => state.setUsername);
  const setUserData = useStore((state) => state.setUserData);
  const setReposData = useStore((state) => state.setReposData);
  const setFollowersData = useStore((state) => state.setFollowersData);

  const handleSearch = async () => {
    setUsername(inputValue);
    try {
      const { userData, reposData, followersData } = await fetchGitHubUser(inputValue);
      setUserData(userData);
      setReposData(reposData);
      setFollowersData(followersData);
    } catch (error) {
      console.error('Error fetching GitHub user:', error);
    }
  };

  return (

    <div className='navheader'>

    <div className='navheaderheader'><h1>GITHUB FINDER</h1></div>
    <p><a href="https://github.com/Joseh254"> By Joseph Mbugua</a></p>
    <div className='searchitemscontainer'>

    <input type="text" id="searchinput"  placeholder='Enter User Name'  value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
    <button type='button' onClick={handleSearch}>Search</button>
      </div>
    </div>

  
  );
}

export default Home;



