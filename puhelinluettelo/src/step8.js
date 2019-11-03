import React, {useState, useEffect} from 'react'
import NaytaHenkilot from './components/NaytaHenkilot'
import HenkiloKasittely from './services/henkiloKasittely'

const App = (props) => {
  const [henkilot, setHenkilot] = useState([])
  const [uusiNimi, setUusiNimi] = useState('')
  const [uusiNumero, setUusiNumero] = useState('')
  const [hakuEhto, setHakuEhto] = useState("")

  useEffect(() => {
    HenkiloKasittely
    .noudaHenkilot()
    .then(response => {
      console.log('Henkilötiedot noudettu')
      setHenkilot(response.data)
    })
  }, [])

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
      HenkiloKasittely
      .lisaaHenkilo(uusiHenkilo)
      .then(response => {
        console.log('Henkilötiedot lisätty') 
        setHenkilot(henkilot.concat(uusiHenkilo))
        setUusiNimi('')
        setUusiNumero('')
      })
    }
  }

  const kasitteleNimenMuutos = (event) => {
    console.log(event.target.value)
    setUusiNimi(event.target.value)
  }

  const kasitteleNumeronMuutos = (event) => {
    console.log(event.target.value)
    setUusiNumero(event.target.value)
  }

  const kasitteleHakuMuutos = (event) => {
    console.log(event.target.value)
    setHakuEhto(event.target.value)
  }

  return (
    <div>
      <h2>Puhelinmuistio</h2>
        <div>Hae yhteystiedoista: <input value={hakuEhto} onChange={kasitteleHakuMuutos}/></div>
      <form onSubmit = {lisaaNimi}>
        <h3>Lisää yhteystieto</h3>
        <div>Nimi:   <input value={uusiNimi} onChange={kasitteleNimenMuutos}/></div>
        <div>Numero: <input value={uusiNumero} onChange={kasitteleNumeronMuutos}/></div>
        <div><button type="submit">Lisää</button></div>
      </form>
      <h3>Numerot</h3>
      <ul><NaytaHenkilot henkilot={henkilot} hakuEhto={hakuEhto}/></ul>
    </div>
  )
}

export default App;
