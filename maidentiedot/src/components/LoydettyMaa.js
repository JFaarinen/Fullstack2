import React from 'react'

const LoydettyMaa = ({maa}) => {
    return (
      <div>
        <h2>{maa.name}</h2>
        <div>Pääkaupunki: {maa.capital}</div>
        <div>Population: {maa.population}</div>
        <h3>Kielet:</h3>
        {maa.languages.map(kieli => <li key={kieli.iso639_1}>{kieli.name}</li>)}
        <h3>Lippu:</h3>
        <img src={maa.flag} height="60" border="1"></img>
      </div>
    )
  }

  export default {LoydettyMaa}