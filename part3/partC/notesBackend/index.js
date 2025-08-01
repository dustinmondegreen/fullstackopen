require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const Note = require('./models/note')

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => response.json(notes))
})

app.get('/api/notes/:id', (request, response) => {
    const id = request.params.id 
    const note = notes.find(note => note.id === id)
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/notes/:id', (request, response) => {
    const id = request.params.id
    notes = notes.filter(note => note.id !== id)
    console.log(notes)
    response.status(204).end()
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})


app.post('/api/notes', (request, response) => {
  const body = request.body

  if(!body.content) {
    return response.status(400).json({error: 'content missing'})
  }

  const note = new Note({
    content: body.content, 
    important: body.important || false,
  })

  note.save().then(savedNote => {
    response.json(savedNote)
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})