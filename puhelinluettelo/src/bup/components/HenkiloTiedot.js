import React from 'react'
import Henkilo from './Henkilo'

const HenkiloTiedot = ({persons, kasittelePoisto}) => {
    return(
        persons.map(person =>
        <Henkilo key={person.id} 
            nimi={person.nimi} 
            numero={person.numero} 
            poistaHenkilo = {() => kasittelePoisto(person.id)}/>
        )
    )
    }
export default HenkiloTiedot
