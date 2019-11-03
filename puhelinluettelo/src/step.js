import React, {useState, useEffect} from 'react'

const App = (props) => {
  const [henkilot, setHenkilot] = useState([{
    nimi: 'Arto Hellas'
  }])
  const [uusiNimi, setUusiNimi] = useState('')

  const lisaaNimi = (event) => {
    event.preventDefault()
    const uusiHenkilo = {
      nimi: uusiNimi,
    }
    setHenkilot(henkilot.concat(uusiHenkilo))
    setUusiNimi('')
  }

  const NaytaHenkilot = ({henkilot}) => (
    henkilot.map(henkilo => <HenkilonTiedot henkilo={henkilo} />)
  )
  
  const HenkilonTiedot = ({henkilo}) => (
    <li key={henkilo.nimi}>{henkilo.nimi}</li>
  )

  const kasitteleNimenMuutos = (event) => {
    console.log(event.target.value)
    setUusiNimi(event.target.value)
  }

  return (
    <div>
      <h2>Puhelinmuistio</h2>
      <form onSubmit = {lisaaNimi}>
        <div>
          Nimi: <input value={uusiNimi} onChange={kasitteleNimenMuutos}/>
        </div>
        <div>
          <button type="submit">Lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <ul><NaytaHenkilot henkilot={henkilot}/></ul>
    </div>
  )
}

export default App;
