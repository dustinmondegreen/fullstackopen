require('dotenv').config()
const Person = require('./models/person')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.static('dist'))
app.use(express.json())
app.use(cors())

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if(error.name === 'CastError') {
    return response.status(400).json({message: 'Invalid ID Format'})
  }

  next(error)
}

const unknownEndpoint = (request, response) => {
  response.status(404).json({message: 'unknown endpoint'})
}

app.get('/api/persons', (request, response) => {
  Person.find({}).then(person => {
    response.json(person)
  })
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
  .then(person => {
    if(person) {
      response.json(person)
    } else {
      return response.status(404).json({
        error: 'Resource not Found'
      })
    }
  })
  .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body
  
  if(!body.name) {
    return response.status(400).json({
      error: 'name missing'
    })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  }).catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body
  
  Person.findById(request.params.id)
  .then(Person => {
    if(!Person) {
      return response.status(404).json({error: 'Missing person'})
    }

    Person.name = body.name
    Person.number = body.number

    return Person.save().then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))

  })
})

app.delete('/api/persons/:id', (request, response, next) => {
  console.log(request.header)
  Person.findByIdAndDelete(request.params.id)
  .then(result => {
    response.status(204).end()
  })
  .catch(error => next(error))
})

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})