import { useState } from "react";

const Statistic = ({good, neutral, bad}) => {
  const resGood = good * 1
  const resNeutral = 0
  const resBad = bad * (-1)
  const total = good + neutral + bad
  if(total > 0){
    return(
      <>
        <p>Average {(resGood + resNeutral + resBad) / total}</p>
        <p>Good {((good) / total) * 100}%</p>
      </>
    )
  }else{
    return(
      <p>No feedback given</p>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return(
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => (setGood(good + 1))}>good</button>
      <button onClick={() => (setNeutral(neutral + 1))}>neutral</button>
      <button onClick={() => (setBad(bad + 1))}>bad</button>

      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {good + neutral + bad}</p>
      <Statistic good={good} neutral={neutral} bad={bad}/>


    </div>
  )
}

export default App