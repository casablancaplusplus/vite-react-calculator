import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function DO_MATH_STRING(s: string): number {
  console.log(`math string: ${s}`)
  // split the string s into an array of characters
  let arr = s.split("")
  console.log(`arr: ${arr}`)
  let currentNum = ""
  let currentOp = ""
  let result = 0
  // Iterate arr to read on character at a time
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i]
    // console.log(`index: ${i} key: ${key}`)
    console.log(`key: ${key}`)
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(key)) { // key is a number
      currentNum += key
      console.log(`currentNum: ${currentNum} currentOp: ${currentOp}`)
      if (i == arr.length - 1) result = DO_MATH(currentOp, result, Number(currentNum))
    } else if (['+', '-', '*', '/'].includes(key)) { // key is an operation
      if (currentOp != "") {
        result = DO_MATH(currentOp, result, Number(currentNum))
        currentOp = key // update op
        currentNum = ""
      } else {
        result = Number(currentNum)
        currentOp = key
        currentNum = ""
      }
    }
  }
  return result
}

function DO_MATH(op: string, leftHandValue: number, rightHandValue: number): number {
  console.log(`DO_MATH op = ${op} left = ${leftHandValue} right = ${rightHandValue}`)
  switch (op) {
    case "+":
      return leftHandValue + rightHandValue
    case "-":
      return leftHandValue - rightHandValue
    case "*":
      return leftHandValue * rightHandValue
    case "/":
      return leftHandValue / rightHandValue
    default:
      return 0
  }
}

function App() {
  const [mathString, setMathString] = useState("")
  const [result, setResult] = useState(0)
  const [currentNum, setCurrentNum] = useState("")
  const [mathOp, setMathOp] = useState("")

  useEffect(() => {
    console.log("Current number: " + currentNum)
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React! Calculator</p>
        <p>
          {mathString + "=" + result}
          <br />
          {[1, 2, 3].map((number) => <span><button type="button" onClick={() => {
            setMathString(mathString + number)
            setCurrentNum(currentNum + number)
          }
          }>{number}</button>&nbsp;&nbsp;</span>)}
          <button type="button" onClick={() => {
            setMathString(mathString + "+")
            setMathOp("+")
            setCurrentNum("")
          }}>+</button>
          <br />
          <br />
          {[4, 5, 6].map((number) => <span><button type="button" onClick={() => {
            setMathString(mathString + number)
            setCurrentNum(currentNum + number)
          }
          }>{number}</button>&nbsp;&nbsp;</span>)}
          <button type="button" onClick={() => {
            setMathString(mathString + "-")
            setMathOp("+")
            setCurrentNum("")
          }}>-</button>
          <br />
          <br />
          {[7, 8, 9].map((number) => <span><button type="button" onClick={() => {
            setMathString(mathString + number)
            setCurrentNum(currentNum + number)
          }
          }>{number}</button>&nbsp;&nbsp;</span>)}
          <button type="button" onClick={() => {
            setMathString(mathString + "*")
            setMathOp("*")
            setCurrentNum("")
          }}>x</button>
          <br />
          <br />
          <span><button type="button" onClick={() => {
            setMathString(mathString + 0)
            setCurrentNum(currentNum + 0)
          }
          }>0</button>&nbsp;&nbsp;</span>
          <button type="button" onClick={() => {
            setResult(DO_MATH_STRING(mathString))
          }}>=</button>&nbsp;&nbsp;
          <button type="button" onClick={() => {
            setMathString(mathString + "/")
            setMathOp("/")
            setCurrentNum("")
          }}>/</button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
