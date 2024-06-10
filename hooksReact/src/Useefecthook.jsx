import React, { useEffect } from 'react';

function UseEffectHook() {

useEffect(()=>(
console.log("you rendered a component")
));

  return (
    <>
      <h1>Hello, useEffect!</h1>
    </>
  );
}

export default UseEffectHook;
