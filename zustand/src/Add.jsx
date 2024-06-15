import React from 'react'
import Usercounterstore from './Store/Counterstore'

function Add() {

  const count=Usercounterstore((state)=>state.mycount)
  const addcount = Usercounterstore((state)=>state.addcount);

  function handleadd(){
    addcount();
  }
  return (
    <div>
      <button onClick={handleadd}>
        count is {count}
      </button>
    </div>
  )
}

export default Add;