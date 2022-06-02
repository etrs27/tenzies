import React from 'react'
import './Die.css'

export default function Die(props) {
    const dieElements = props.dice.map(num => {
        const styles = {backgroundColor: num.isHeld ? "#59E391" : "#FFF"}
        return (
            <div
                className="dice"
                style={styles}
                onClick={() => props.hold(num.id)}
                key={num.id}
            >
                <h3>{num.value}</h3>
            </div>
        )
    })
    
    return (
        <div className="dices-container">
          {dieElements}
        </div>
    )
}