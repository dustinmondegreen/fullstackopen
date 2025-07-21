import personsService from "../services/personsService"

const PersonForm = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber}) => {
  const newNameHandler = (event) => setNewName(event.target.value)
  const newnumberHandler = (event) => setNewNumber(event.target.value)

  const addNoteHandler = (event) => {
    event.preventDefault()

    const newObject = {name: newName, number: newNumber }


    if(persons.some(person => person.name === newName)){
      personsService.put(newObject)
      .then(setPersons(persons.map(person => person.name === newObject.name? newObject : person)))
      return
    }
    
    
    personsService
    .post(newObject)
    .then(() => setPersons(persons.concat(newObject)))
  }

  return(
      <form onSubmit={addNoteHandler}>
        <div>
          name: <input value={newName} onChange={newNameHandler}/>
          number: <input value={newNumber} onChange={newnumberHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm