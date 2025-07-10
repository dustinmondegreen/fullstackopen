import { useState } from "react"

const Yoyo = ({left, right}) => {
  if(left + right == 5){
    return(
      <p>the value of left & right together is {left + right}</p>
    )
  }

}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
    setTotal(left + 1 + right)
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    setTotal(left+ 1 + right)
  }


  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <br />
      <p>{allClicks.join(' ')}</p>
      {total}
      <Yoyo left={left} right={right}/>

    </div>
  )
}

export default App