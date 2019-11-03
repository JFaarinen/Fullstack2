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

  const paivitaNaytto = () => {
    HenkiloKasittely 
    .noudaHenkilot()
    .then(response => {setHenkilot(response.data)
    })
  }

  const lisaaNimi = (event) => {
    event.preventDefault()
    const henkiloJoListassa = henkilot.filter(henkilo => henkilo.nimi ===uusiNimi)
    if(henkiloJoListassa.length>0){
      if (window.confirm(`Nimi ${uusiNimi} on jo luettelossa, päivitetäänkö tiedot?`)){
        const uusiHenkilo = {
          nimi: henkiloJoListassa[0].nimi,
          numero: uusiNumero,
          id: henkiloJoListassa[0].id
        }
        HenkiloKasittely
        .paivitaTiedot(uusiHenkilo)
        .then(response => {
          paivitaNaytto()
        })
      }
    }
    else {
        const uusiHenkilo = {
        nimi: uusiNimi,
        numero: uusiNumero,
      }
      HenkiloKasittely
      .lisaaHenkilo(uusiHenkilo)
      .then(response => {
        paivitaNaytto()
      })
    }
    setUusiNimi('')
    setUusiNumero('')
  }


  const poistaHenkilo = ({id}) => {
    if (window.confirm("Poistetaanko henkilön tiedot?")){
      HenkiloKasittely
      .poistaHenkilo({id})
      .then(response => {
        paivitaNaytto()
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
      <ul><NaytaHenkilot henkilot={henkilot} hakuEhto={hakuEhto} poisto={poistaHenkilo}/></ul>
    </div>
  )
}

export default App;
