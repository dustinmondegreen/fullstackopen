import { useState, useEffect } from 'react'
import axios from 'axios'

const DisplayPerson = ({person}) => {
  return(
    <li key={person.name}>{person.name} {person.number}</li>
  )
}

const Filter = ({newfilter, setFilter}) => {
  const filterHandler = (event) => setFilter(event.target.value)
  return(
    <p>filter shown with <input value={newfilter} onChange={filterHandler}/></p>
  )
}

const PersonForm = ({persons, setPersons, newName, setNewName, newnumber, setNewnumber}) => {
  const newNameHandler = (event) => setNewName(event.target.value)
  const newnumberHandler = (event) => setNewnumber(event.target.value)

  const addNoteHandler = (event) => {
    event.preventDefault()

    if(persons.some(person => person.name === newName)){
      alert(`${newName} already exists!`)
      return
    }
    
    const newObject = {name: newName, number: newnumber }

    setPersons(persons.concat(newObject))
  }

  return(
      <form onSubmit={addNoteHandler}>
        <div>
          name: <input value={newName} onChange={newNameHandler}/>
          name: <input value={newnumber} onChange={newnumberHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const PersonsList = ({persons, newfilter}) => {
  const filterPersons = persons.filter((person) => person.name.includes(newfilter)) 

  return(
    <ul>
      {filterPersons.map(
        (person) => (<DisplayPerson key={person.name} person={person}/>)
      )}        
    </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('Insert a name')
  const [newnumber, setNewnumber] = useState('Insert a number')
  const [newfilter, setFilter] = useState('')

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  return (
    <div>

      <h1>Phonebook</h1>
      <Filter newfilter={newfilter} setFilter={setFilter}/>
      <h2>Add a New Person</h2>

      <PersonForm 
      newName={newName} 
      setNewName={setNewName} 
      newNumber={newnumber} 
      setNewnumber={setNewnumber} 
      persons={persons}
      setPersons={setPersons}
      />

      <h2>Numbers</h2>
      <PersonsList persons={persons} newfilter={newfilter}/>


    </div>
  )
}

export default App