
import React from 'react';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Repositories from '../src/Pages/Repositories';
import Followers from '../src/Pages/Followers';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Home />
      <Profile />
      <Repositories />
      <Followers />
    </div>
  );
}

export default App;
