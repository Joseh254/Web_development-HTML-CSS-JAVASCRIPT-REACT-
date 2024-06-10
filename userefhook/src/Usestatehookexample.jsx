import React from 'react'
import { useState } from 'react'

function Usestatehookexample() {

    const [name, setname] =useState ()

    function handlechangename(event){
       setname( event.target.value)
    }
  return (
    <div>
        <input type="text" onChange={handlechangename} />
        <h1>{name ? name :"Guest"}</h1>
    </div>
  )
}

// in this exaple,we are trying to use the user input as the h1 element.
// we check if the name is initialized and if not,we use guest as the name

export default Usestatehookexample