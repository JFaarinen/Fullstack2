import React from 'react'
import HenkilonTiedot from './HenkilonTiedot'


const NaytaHenkilot = ({henkilot, hakuEhto, poisto}) => {
  let suodatetutTiedot
  if (hakuEhto.length > 0) {
    suodatetutTiedot = henkilot.filter(henkilo => 
      henkilo.nimi.toLowerCase().includes(hakuEhto.toLowerCase()))
    return (suodatetutTiedot.map(henkilo => <HenkilonTiedot key={henkilo.id} 
      henkilo={henkilo} poisto={poisto}/>))
  }
  else suodatetutTiedot = henkilot.map(henkilo => <HenkilonTiedot key={henkilo.id} 
    henkilo={henkilo} poisto={poisto}/>)
  return suodatetutTiedot
  }

export default NaytaHenkilot