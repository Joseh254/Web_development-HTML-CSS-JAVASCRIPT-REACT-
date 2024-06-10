import React from 'react'
import { useRef } from 'react'

function Myusereffhook() {

    const Usereffhook = useRef(null)

    function handlebeautifyelement(){
        Usereffhook.current.classList.toggle("myhook")
    }
  return (
    <>
    <div ref={Usereffhook}>Myusereffhook</div>
    <button onClick={handlebeautifyelement}>beautify</button>
    </>
  )
}

export default Myusereffhook