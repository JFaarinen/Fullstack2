import React, {useState, useEffect} from 'react'
import axios from 'axios'
import HenkiloTiedot from './components/HenkiloTiedot'
import Otsikko from './components/Otsikko'

const App = (props) => {
  const [persons, setPersons] = useState([])
  const [newName, setName] = useState('uusi henkilö')
  const [newNumber, setNumber] = useState('uusi numero')

  const koukku = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/Henkilot')
      .then(response => {
        setPersons(response.data)
      })
  }

  useEffect(koukku, [])

  const LisaaHenkilo = (event) => {
    event.preventDefault()
    if (persons.filter(person => person.nimi === newName).length > 0){
        window.alert(`${newName} on jo lisätty luetteloon`)
    }
    else {
        const henkilo ={
            nimi: newName,
            numero: newNumber,
            id: persons.length + 1
          }
          setPersons(persons.concat(henkilo))
          setName('')
          setNumber('')
    }
  }

  const kasitteleNimiMuutos = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }

  const kasitteleNumeroMuutos = (event) => {
    console.log(event.target.value)
    setNumber(event.target.value)
  }

  return (
    <div>
      <Otsikko teksti="Puhelinluettelo" />
      <form onSubmit = {LisaaHenkilo}>
        <div>
          name: <input value={newName} onChange={kasitteleNimiMuutos} />
        </div>
        <div>
          number: <input value={newNumber} onChange={kasitteleNumeroMuutos} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <Otsikko teksti="Numerot" />
      <HenkiloTiedot persons={persons} />
    </div>
    
  );
}

export default App;
