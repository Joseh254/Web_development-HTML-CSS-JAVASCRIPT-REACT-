import React, { useContext } from 'react';
import Usercontext from '../context/Usercontext';
import Profileheader from './Profileheader';

function Profile() {
    const { username, age } = useContext(Usercontext);

    return (
        <>
            <Profileheader username={username} age={age} />
        </>
    );
}

export default Profile;
