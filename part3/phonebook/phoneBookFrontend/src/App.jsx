import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonsList from './components/PersonsList'
import personsService from './services/personsService'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('Insert a name')
  const [newNumber, setNewNumber] = useState('Insert a number')
  const [newfilter, setFilter] = useState('')

  useEffect(() => {
    personsService.get().then((persons) => setPersons(persons))
  }, [])

  return (
    <div>

      <h1>Phonebook</h1>
      <Filter newfilter={newfilter} setFilter={setFilter}/>
      <h2>Add a New Person</h2>

      <PersonForm 
      newName={newName} 
      setNewName={setNewName} 
      newNumber={newNumber} 
      setNewNumber={setNewNumber} 
      persons={persons}
      setPersons={setPersons}
      />

      <h2>Numbers</h2>
      <PersonsList persons={persons} newfilter={newfilter} setPersons={setPersons}/>


    </div>
  )
}

export default App