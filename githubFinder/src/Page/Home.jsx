import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import Profile from './Profile'

import githubLinkscontext from '../assets/Githubprovider/Githubprovidercontext'



const username = ""
const profilepicture = ""
const followers = ""
const following = ""
function Home() {
  return (
    <>
    
    <div className='navheader'>
    <div className='navheaderheader'><h1>GITHUB FINDER</h1></div>
    <p><a href="https://github.com/Joseh254"> By Joseph Mbugua</a></p>
    <div className='searchitemscontainer'>
        <input type="text" id="searchinput"  placeholder='Enter User Name'/>
        <button>Search</button>
    </div>
    </div>
    
    <div className="profile">
    <githubLinkscontext.Provider value={{username,profilepicture,followers,following}}>
      <Profile profilepicture = {profilepicture} username = {username} followers={followers} following= {following}/>
    </githubLinkscontext.Provider>
    </div>
    
    </>
  )
}

export default Home