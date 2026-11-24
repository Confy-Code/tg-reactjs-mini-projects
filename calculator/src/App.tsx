import { useState } from 'react'

import Header from './components/Header'
import Numpad from './components/Numpad'

export default function App() {
  const [OpClicked, setOpClicked] = useState(false)
  const [num, setNum] = useState(0)
  const [res, setRes] = useState([0])
  // const [op, setOp] = useState('')

  function setOpClickTrue(op: string) {
    let result: number;
    setOpClicked(true)

    if (res[0] == 0) {
      setRes([num])
    }

    if (res.length == 1){
      setRes((prevArr) => [...prevArr, num])
    }

    else{
      switch(op){
        case "+" :
          result = res[0] + res[1]
          break;
        case "-":
          result = res[0] - res[1]
          break;
        case "*":
          result = res[0] * res[1]
          break
        case "/":
          result = res[0] / res[1]
          break
        default:
          result = 0
      }

      setRes([result])
    }

    setNum(0)

    console.log(res)
  }

  function setOpClickFalse() {
    setOpClicked(false)
  }

  function getNumber(num: number) {
    setNum((prevNum) => prevNum * 10 + num)
  }

  // function calculate(op: string){
  //   switch(op){
  //     case '+':
  //       num + 
  //   }
  // }


  return (
    <>
      <Header opClicked={OpClicked} num={num}/>
      <Numpad setOpClickedTrue={setOpClickTrue} setOpClickedFalse={setOpClickFalse} getNumber={getNumber}/>
    </>
  )
}