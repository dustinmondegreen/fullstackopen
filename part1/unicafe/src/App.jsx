import { useState } from "react";

const StatisticLine = ({text, value}) => (<p>{text} {value}%</p>)

const Statistic = ({good, neutral, bad}) => {
  const resGood = good * 1
  const resNeutral = 0
  const resBad = bad * (-1)
  const total = good + neutral + bad
  if(total > 0){
    return(
      <>
        <StatisticLine text="good" value={((good) / total) * 100}/>
        <StatisticLine text="good" value={((neutral) / total) * 100}/>
        <StatisticLine text="good" value={((bad) / total) * 100}/>
        <p>Average {(resGood + resNeutral + resBad) / total}</p>
      </>
    )
  }else{
    return(
      <p>No feedback given</p>
    )
  }
}

const Button = ({onclick, text}) => (<button onClick={onclick}>{text}</button>)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return(
    <div>
      <h1>Give Feedback</h1>
      <Button onclick={() => setGood(good + 1)} text='good'/>
      <Button onclick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button onclick={() => setBad(bad + 1)} text='bad'/>

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