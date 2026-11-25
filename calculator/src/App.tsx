import { useState } from 'react'

import Header from './components/Header'
import Numpad from './components/Numpad'

export default function App() {
  const [opClicked, setOpClicked] = useState(false)
  const [num, setNum] = useState(0)
  // const [float, setFloat] = 
  const [res, setRes] = useState([0])
  const [op, setOp] = useState('')
  const [initialState, setInitialState] = useState(0)

  function setOpClickTrue(op_: string) {
    setOpClicked(true)
    setOp(op_)

    if (initialState == 0) {
      if (op_ == '%'){
        setNum((prevNum) => prevNum / 100)
        setInitialState(0)
      }
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
        case "%":
          res[0] /= 100;
          break
        default:
          setRes([res[0]])
      }

      setRes([res[0]])
    }
    setNum(0)
    setInitialState((prevState) => prevState + 1)
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
    setInitialState(0)
  }

  function setNegative(){
    setNum(num * -1)
  }

  function plainSetNum(num_: number){
    setNum(num_)
    setOpClickFalse()
  }

  function setFloats(){
    setNum((prevNum) => prevNum + 0.1)
  }

  document.addEventListener("keydown", (event) => {
        if(event.key >= "0" && event.key <= "9"){
            if (!opClicked){
                setNum(Number(event.key))
            }
            else {}
        }

        else if (event.key == "+" || event.key == "-" || event.key == "*" || 
            event.key == "/" || event.key == "%" || event.key == "="){
                setOpClickTrue(event.key)
                // console.log(event.key)
        }

        else{}
    })


  console.log(`num: ${num}`)
  console.log(`res[0]: ${res[0]}`)
  console.log(`initial State: ${initialState}`)

  return (
    <>
      <Header opClicked={opClicked} result={res} num={num}/>
      <Numpad setOpClickedTrue={setOpClickTrue} setOpClickedFalse={setOpClickFalse} 
      getNumber={getNumber} resetStates={resetStates} setNegative={setNegative} setFloats={setFloats}/>
    </>
  )
}