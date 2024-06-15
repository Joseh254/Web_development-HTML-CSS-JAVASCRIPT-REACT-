import React from 'react'
import Usercounterstore from './Store/Counterstore'

function Subtract() {

    const count = Usercounterstore((statee)=>statee.mycount)
    const minus = Usercounterstore((state)=>state.minuscount)

    function handleminus(){
        minus()
    }


    
  return (
    <div>
        <button onClick={handleminus}>count is {count} </button>
    </div>
  )
}

export default Subtract