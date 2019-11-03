import React, {useState} from 'react';

const App = (props) => {
  const [persons, setPersons] = useState(props.henkilot)
  const [newName, setName] = useState('uusi henkilö')
  const [newNumber, setNumber] = useState('uusi numero')

  const lisaaHenkilo = (event) => {
    event.preventDefault()
    if (persons.filter(person => person.name === newName).length > 0){
        window.alert(`${newName} on jo lisätty luetteloon`)
    }
    else {
        const henkilo ={
            name: newName,
            number: newNumber,
          }
          setPersons(persons.concat(henkilo))
          setName('')
          setNumber('')
    }
  }

  const henkiloTiedot = () => persons.map(person =>
    <Henkilo key={person.name} name={person.name} number={person.number} />
    )

  const kasitteleNimiMuutos = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }

  const kasitteleNumeroMuutos = (event) => {
    console.log(event.target.value)
    setNumber(event.target.value)
  }

  const Henkilo = ({name, number}) => {
    return(<li>{name} {number}</li>)
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {lisaaHenkilo}>
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
      <h2>Numbers</h2>
      <ul>{henkiloTiedot()}</ul>
    </div>
    
  );
}

export default App;
