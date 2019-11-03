import React, {useState, useEffect} from 'react';
import HakuKasittely from './services/hakuKasittely'

function App() {
  const [hakuEhto, setHakuEhto] = useState('')
  const [maat, setMaat] = useState([])

  useEffect(() => {
    HakuKasittely
    .noudaMaat()
    .then(response => {
      console.log('Henkilötiedot noudettu')
      setMaat(response.data)
    })
  }, [])

  const HakuTulokset = ({maat, hakuEhto}) => {
    let suodatetutMaat = maat
    if (hakuEhto.length > 0) {
      suodatetutMaat = maat.filter(maa => 
        maa.name.toLowerCase().includes(hakuEhto.toLowerCase()))
    }
    if (suodatetutMaat.length > 10) {
      return (<div>Liian monta tulosta, tarkenna rajausta</div>)
    }
    else if (suodatetutMaat.length === 1) {
      const loydetty = suodatetutMaat[0]
      return (<div><LoydettyMaa maa={loydetty}/></div>)
    }
    else if (suodatetutMaat.length < 1) {
      return (<div>Hakua vastaavaa maata ei löytynyt!</div>)
    }
    else return(suodatetutMaat.map(maa => <ListaaMaa key={maa.name} maa={maa} />)
    )
  }

  const ListaaMaa = ({maa}) => {
    return (<div>{maa.name} <Button teksti={"Valitse"} valinta={maa.name} /></div>)
  }

  const Button = ({teksti, valinta}) => {
      return(<button onClick={() => setHakuEhto(valinta)}>{teksti}</button>)
  }

  const LoydettyMaa = ({maa}) => {
    return (
      <div>
        <h2>{maa.name}</h2>
        <div>Pääkaupunki: {maa.capital}</div>
        <div>Population: {maa.population}</div>
        <h3>Kielet:</h3>
        {maa.languages.map(kieli => <li key={kieli.iso639_1}>{kieli.name}</li>)}
        <h3>Lippu:</h3>
        <img src={maa.flag} height="60" border="1" alt="Maan lippu"></img>
      </div>
    )
  }

  const kasitteleHakuMuutos = (event) => {
    console.log(event.target.value)
    setHakuEhto(event.target.value)
  }

  return (
    <div>
      <h1>Etsi maiden tietoja</h1>
      <div>Hakuehto: <input value={hakuEhto} onChange={kasitteleHakuMuutos}></input></div>
      <HakuTulokset maat={maat} hakuEhto={hakuEhto}/>
    </div>
  );
}

export default App;
