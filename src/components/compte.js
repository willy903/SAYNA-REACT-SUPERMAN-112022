import React, { useState } from 'react'
import CompteConnected from '../components/compteConnected'
import Register from '../components/register'

const test = false;
const Compte = () => {
  return (
    <div>
        {test ? <CompteConnected/> : <Register/>}
    </div>
  )
}

export default Compte