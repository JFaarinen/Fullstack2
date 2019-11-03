import React from 'react'

const Henkilo = ({id, nimi, numero, poistaTiedot}) => {
    return(<li>{nimi} {numero} <button onClick={poistaTiedot}>Poista tiedot</button></li>)
}

export default Henkilo