import React, { useEffect } from 'react';

function UseEffectHook() {

  useEffect(() => {
    console.log("Component rendered");
  });

  return (
    <>
      <h1>Hello, useEffect!</h1>
    </>
  );
}

export default UseEffectHook;
