import React from 'react'
import { useRef } from 'react'

function Myusereffhook() {
// initialize a usereff hook
    const Usereffhook = useRef(null)
// create a funtion to be handled on click
    function handlebeautifyelement(){
        Usereffhook.current.classList.toggle("myhook")
        // Note:  L in classlist is Capital
    }
  return (
    <>
    {/* pass a ref inside the container you want to change */}
    <div ref={Usereffhook}>Myusereffhook</div> 
    <button onClick={handlebeautifyelement}>beautify</button>
    </>
  )
}

export default Myusereffhook