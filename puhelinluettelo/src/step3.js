import React, {useState, useEffect} from 'react'

const App = (props) => {
  const [henkilot, setHenkilot] = useState([{
    nimi: 'Arto Hellas', numero: '040-123456',
  }])
  const [uusiNimi, setUusiNimi] = useState('')
  const [uusiNumero, setUusiNumero] = useState('')

  const lisaaNimi = (event) => {
    event.preventDefault()
    if(henkilot.filter(henkilo => henkilo.nimi === uusiNimi).length>0){
      window.alert(`Nimi ${uusiNimi} on jo luettelossa`)
    }
    else {
        const uusiHenkilo = {
        nimi: uusiNimi,
        numero: uusiNumero,
      }
      setHenkilot(henkilot.concat(uusiHenkilo))
      setUusiNimi('')
    }
  }

  const NaytaHenkilot = ({henkilot}) => (
    henkilot.map(henkilo => <HenkilonTiedot key={henkilo.nimi} henkilo={henkilo} />)
  )
  
  const HenkilonTiedot = ({henkilo}) => (
    <li>{henkilo.nimi}, {henkilo.numero}</li>
  )

  const kasitteleNimenMuutos = (event) => {
    console.log(event.target.value)
    setUusiNimi(event.target.value)
  }

  const kasitteleNumeronMuutos = (event) => {
    console.log(event.target.value)
    setUusiNumero(event.target.value)
  }

  return (
    <div>
      <h2>Puhelinmuistio</h2>
      <form onSubmit = {lisaaNimi}>
        <div>Nimi:   <input value={uusiNimi} onChange={kasitteleNimenMuutos}/></div>
        <div>Numero: <input value={uusiNumero} onChange={kasitteleNumeronMuutos}/></div>
        <div><button type="submit">Lisää</button></div>
      </form>
      <h2>Numerot</h2>
      <ul><NaytaHenkilot henkilot={henkilot}/></ul>
    </div>
  )
}

export default App;
