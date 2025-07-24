const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/info', (request, response) => {
  const personsCount = persons.length
  const now = new Date();
  response.send(`
    <p>Phonebook has info for ${personsCount} people</p>
    <p>${now.toString()}</p>
    `)
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = persons.find(person => person.id === id)
  if(person){
    return response.json(person)
  }else{
    return response.status(400).json({error: 'Content Missing'})
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  persons = persons.filter(person => person.id !== id)
  return response.status(200).json({message: 'Succesfully deleted'})
})

app.post('/api/persons', (request, response) => {
  const body = request.body
  const existingPerson = persons.find(person => person.id === body.id)

  console.log(body)
  if (body.name && body.number && !(existingPerson)) {
    const person = {
      id: Math.floor(Math.random() * 101),
      name: body.name,
      number: body.number
    }

    persons = persons.concat(person)
    return response.json('Succesfully added')
  } else {
    return response.status(400).json('missing fields!')
  }
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})