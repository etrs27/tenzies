import React from 'react'
import './Die.css'

export default function Die(props) {
    const dieElements = props.dice.map((num, index) => {
        return (
            <div className="dice" key={index}>
                <h3>{num}</h3>
            </div>
        )
    })
    
    return (
        <div className="dices-container">
          {dieElements}
        </div>
    )
}