import React from 'react'
import './App.css';
import Die from './Die'
import Confetti from 'react-confetti'
import { nanoid } from 'nanoid';

export default function App() {
  const [dice, setDice] = React.useState(allDice())

  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
        setTenzies(!tenzies)
        console.log("You have won!")
    }
  }, [dice])

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
    if (!tenzies) {
      setDice(prevDice => prevDice.map(die => {
        return !die.isHeld ? generateNewDice() : die      
      }))
    } else {
      setTenzies(!tenzies)
      setDice(prevDice => prevDice.map(die => {
        return generateNewDice()     
      }))
    }
  }

  function holdDice(id) {
    setDice(prevDice => prevDice.map(die => {
      return id === die.id ?
      { ...die, isHeld: !die.isHeld } : die
    }))
  }

  return (
    <main className="App">
      {tenzies && <Confetti />}
      <div className="game-container">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <Die dice={dice} hold={holdDice}/>
        <button className="roll-button" onClick={rollDice}>
          {tenzies ? "New Game" : "Roll"}
        </button>
      </div>
    </main>
  )
}
