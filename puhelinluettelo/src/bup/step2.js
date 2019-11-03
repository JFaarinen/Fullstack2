import React, {useState} from 'react';

const App = (props) => {
  const [persons, setPersons] = useState(props.henkilot)
  const [newName, setName] = useState('uusi henkilö')

  const lisaaHenkilo = (event) => {
    event.preventDefault()
    console.log(newName)
    if (persons.filter(person => person.name === newName).length > 0){
        window.alert(newName +' on jo lisätty luetteloon')
    }
    else {
        const henkilo ={
            name: newName,
          }
          setPersons(persons.concat(henkilo))
          setName('')
    }
  }

  const henkiloTiedot = () => persons.map(person =>
    <Henkilo key={person.name} name={person.name} />
    )

  const kasitteleSyoteMuutos = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }

  const Henkilo = ({name}) => {
    return(<li>{name}</li>)
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {lisaaHenkilo}>
        <div>
          name: <input value={newName} onChange={kasitteleSyoteMuutos} />
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
