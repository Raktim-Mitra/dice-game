import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
const RollDice = ({currentDice,rollDice}) => {
    
  return (
    <Dicecontainer>
        <div className='dice' onClick={rollDice}>
            <img src={`/images/dice_${currentDice}.png`} alt="dice 1" />
        </div>
        <p>Click on Dice to Roll</p>
    </Dicecontainer>
  )
}

export default RollDice
const Dicecontainer=styled.div`
   margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
   .dice{
    cursor: pointer;
   }
    p{
        font-size: 24px;
    }
`