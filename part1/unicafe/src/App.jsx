import { useState } from "react";

const StatisticLine = ({text, value}) => {
  return(
  <tr>
    <td>{text}</td>
    <td>{value.toFixed(2)}%</td>
  </tr>
  )
}

const Statistic = ({good, neutral, bad}) => {
  const resGood = good * 1
  const resNeutral = 0
  const resBad = bad * (-1)
  const total = good + neutral + bad
  if(total > 0){
    return(
      <>
        <StatisticLine text="good" value={((good) / total) * 100}/>
        <StatisticLine text="neutral" value={((neutral) / total) * 100}/>
        <StatisticLine text="bad" value={((bad) / total) * 100}/>
        <StatisticLine text="average" value={(resGood + resNeutral + resBad) / total}/>
      </>
    )
  }else{
    return(
      <tr><td>No feedback given</td></tr>
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
      <table>
        <tbody>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>total</td>
          <td>{good + neutral + bad}</td>
        </tr>
        <Statistic good={good} neutral={neutral} bad={bad}/>
        </tbody>  
      </table>


    </div>
  )
}

export default App