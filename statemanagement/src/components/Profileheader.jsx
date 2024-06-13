import React from 'react';

function Profileheader({ username, age }) {
    return (
        <header>
            <h1>{username}'s Profile</h1>
            <p>Age: {age}</p>
        </header>
    );
}

export default Profileheader;
