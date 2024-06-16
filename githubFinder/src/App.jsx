
import React from 'react';
import Home from './Page/Home';
// import Profile from './Pages/Profile';
import Repositories from './Page/Repositories';
import Followers from './Page/Followers';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Home />
      {/* <Profile /> */}
      <Repositories />
      <Followers />
    </div>
  );
}

export default App;
