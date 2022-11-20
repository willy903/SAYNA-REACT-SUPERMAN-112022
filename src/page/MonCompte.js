import React from 'react'
import Compte from '../components/compte'
import CompteConnected from '../components/compteConnected'
const test = false;
function MonCompte() {
  return (
    <div>
      {test ? <CompteConnected/> : <Compte/>}
    </div>


  )
}

export default MonCompte