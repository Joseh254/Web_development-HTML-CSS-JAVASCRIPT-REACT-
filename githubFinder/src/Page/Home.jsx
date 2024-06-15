import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import Profile from './Profile'

import githubLinkscontext from '../assets/Githubprovider/Githubprovidercontext'


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
    
    </>
  )
}

export default Home