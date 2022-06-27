import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function parseMathString(mathStr: string) {
  let result = 0
  mathStr.split("").reduce((prev, curr) => {
    if(curr != "+") return prev + curr
    return ""
  })
}

function App() {
  const [mathString, setMathString] = useState("")
  const [result, setResult] = useState("")
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => <button type="button" onClick={() => {
            setMathString(mathString + number)
            setCurrentNum(currentNum + number)
          }
          }>{number}</button>)}
          <br />
          <button type="button" onClick={() => {
            setMathString(mathString + "+")
            setMathOp("+")
            setCurrentNum("")
          }}>+</button>
          <button type="button" onClick={() => {
            setResult(parseMathString(mathString))
          }}>=</button>
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
