import React from 'react'

import { useState } from 'react'



function Number() {


    const [num, setnum] = useState(0)
    const [numberhistory, setnumberhistory] = useState([num])

    function handleclick(){
        setnum(num+1)
        setnumberhistory ([num])
    }

    function handlereduce(){
        setnum(num-1)
        setnumberhistory ([num])
    }
  return (
    <>
    <p>{num}</p>
    <button onClick={handleclick}>add  number by onek</button>
    <button onClick={handlereduce}>reduce the number by one</button>

    <p>previous number</p>
    {
        numberhistory.map((current, i)=> <h1 key={i}>{current}</h1>)
    }
    </>
  )
}

export default Number