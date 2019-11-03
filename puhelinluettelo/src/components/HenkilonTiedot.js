import React from 'react'

  
const HenkilonTiedot = ({henkilo, poisto}) => {
  const id = henkilo.id
  return(
    <li>{henkilo.nimi}, {henkilo.numero} <button onClick={() => poisto({id})}>Poista</button></li>)
}

export default HenkilonTiedot