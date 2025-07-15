import { useState } from 'react'

const DisplayPerson = ({person}) => {
  return(
    <li key={person.name}>{person.name}</li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('Insert a name')


  const newNameHandler = (event) => {
    setNewName(event.target.value)
  }

  const addNoteHandler = (event) => {
    event.preventDefault()
    
    const newObject = {name: newName}

    setPersons(persons.concat(newObject))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNoteHandler}>
        <div>
          name: <input value={newName} onChange={newNameHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(
          (person) => (<DisplayPerson key={person.name} person={person}/>)
        )}        
      </ul>
    </div>
  )
}

export default App