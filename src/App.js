import React from 'react'
import './App.css';
import Die from './Die'
import { nanoid } from 'nanoid';

export default function App() {
  const [dice, setDice] = React.useState(allDice())

  function generateNewDice() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid()
    }
  }

  function allDice() {
    const dieNum = []
    for (let i = 0; i < 10; i++) {
      dieNum.push(generateNewDice())
    }
    return dieNum
  }

  function rollDice() {
    setDice(prevDice => prevDice.map(die => {
      return !die.isHeld ? generateNewDice() : die      
    }))
  }

  function holdDice(id) {
    setDice(prevDice => prevDice.map(die => {
      return id === die.id ?
      { ...die, isHeld: !die.isHeld } : die
    }))
  }

  return (
    <main className="App">
      <div className="game-container">
        <Die dice={dice} hold={holdDice}/>
        <button className="roll-button" onClick={rollDice}>Roll</button>
      </div>
    </main>
  )
}