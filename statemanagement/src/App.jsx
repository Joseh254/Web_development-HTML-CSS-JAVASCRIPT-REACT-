import React, { createContext, useState } from 'react';

const Usercontext = createContext();

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState('JohnDoe');
    const [age, setAge] = useState(30);

    return (
        <Usercontext.Provider value={{ username, age }}>
            {children}
        </Usercontext.Provider>
    );
};

export default Usercontext;
