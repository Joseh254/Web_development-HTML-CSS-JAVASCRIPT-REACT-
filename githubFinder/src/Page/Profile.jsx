import React from 'react'
import {useContext} from 'react'


function Profile() {

  return (
    <>

    <div>
        <div className='profilepicture'>
            {/* <img src={profilepicture} alt="profilepicture" /> */}

        </div>

        <div className='username'>
            <h1>{username} </h1>
        </div>

        <div className="repositories">
            <h2>{repository}</h2>
        </div>

        <div className='followers'>
            <h2>{followers}Followers</h2>
        </div>

        <div>
            <h2>{following}following</h2>
        </div>

    
    </div>
    
    </>
  )
}

export default Profile