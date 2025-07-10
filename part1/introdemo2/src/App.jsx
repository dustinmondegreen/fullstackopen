import { useState } from 'react'

const Hello = ({name, age}) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const [age, setAge] = useState(26)
  const name = 'Peter'
  console.log("age is " + age)
  // setTimeout(
  //   () => setAge(age + 1), 1000
  // )
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
      <button onClick={() => setAge(age + 1)}>Increase</button>
      <button onClick={() => setAge(26)}>Reset</button>

    </div>
  )
}

export default App