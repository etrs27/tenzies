import React from 'react'
import './App.css';
import Die from './Die'

export default function App() {
  const [dice, setDice] = React.useState(diceNum())

  function diceNum() {
    const dieNum = []
    for (let i = 0; i < 10; i++) {
      dieNum.push(Math.floor(Math.random() * 6) + 1)
    }
    return dieNum
  }

  function rollDice() {
    setDice(diceNum())
  }

  return (
    <main className="App">
      <div className="game-container">
        <Die dice={dice}/>
        <button className="roll-button" onClick={rollDice}>Roll</button>
      </div>
    </main>
  )
}