import { useState } from 'react'

import Header from './components/Header'
import Numpad from './components/Numpad'

export default function App() {
  const [OpClicked, setOpClicked] = useState(false)
  const [num, setNum] = useState(0)
  const [res, setRes] = useState([0])
  const [op, setOp] = useState('')

  function setOpClickTrue(op_: string) {
    setOpClicked(true)
    setOp(op_)

    if (res[0] == 0) {
      setRes([num])
    }

    else{
      switch(op){
        case "+" :
          res[0] += num;
          break;
        case "-":
          res[0] -= num;
          break;
        case "*":
          res[0] *= num;
          break
        case "/":
          res[0] /= num;
          break
        default:
          setRes([res[0]])
      }

      setRes([res[0]])
    }
    setNum(0)
  }

  function setOpClickFalse() {
    setOpClicked(false)
  }

  function getNumber(num_: number) {
    setNum((prevNum) => prevNum * 10 + num_) 
  }

  function resetStates(){
    setNum(0)
    setOp('')
    setRes([0])
    setOpClicked(false)
  }

  return (
    <>
      <Header opClicked={OpClicked} result={res} num={num}/>
      <Numpad setOpClickedTrue={setOpClickTrue} setOpClickedFalse={setOpClickFalse} 
      getNumber={getNumber} resetStates={resetStates}/>
    </>
  )
}