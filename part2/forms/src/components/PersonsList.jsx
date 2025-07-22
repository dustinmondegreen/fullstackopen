import personsService from "../services/personsService"

const DisplayPerson = ({person, setPersons, persons}) => {
  const deletePerson = () => {
      if(window.confirm('are you sure?')){
        personsService
        .remove(person)
        .then(() => setPersons(persons.filter(p => p.id !== person.id)))   
      }
  }

  return(
    <>
    <li key={person.name}>{person.name} {person.number}</li>
    <button onClick={deletePerson}>Delete</button>
    </>
  )
}

const PersonsList = ({persons, newfilter, setPersons}) => {
  const filterPersons = persons.filter((person) => person.name.includes(newfilter)) 

  return(
    <ul>
      {filterPersons.map(
        (person) => (<DisplayPerson key={person.name} person={person} setPersons={setPersons} persons={persons}/>)
      )}        
    </ul>
  )
}

export default PersonsList