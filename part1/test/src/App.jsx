import { useState } from "react"

const App = () => {
  const [value, setValue] = useState(10)

  const hello = (newValue) => {
    return () => {
      console.log('hello', newValue)
      setValue(newValue)
    }
  }
 
  return (
    <div>
      {value}
      <button onClick={hello(10)}>button</button>      
      <button onClick={hello(1000)}>button</button>      
      <button onClick={hello(0)}>button</button> 
      </div>
  )
}

export default App