import React from 'react'
import TotalScore from './Totalscore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'
const Gameplay = () => {
    const [selectedNumber, setselectedNumber] = useState()
    const [currentDice, setcurrentDice] = useState(1)
    const[score,setScore]=useState(0);
    const [error, seterror] = useState("")
    const [showRules, setShowRules] = useState(false);
    const generaterandomnumber=(min,max)=>{
        return Math.floor(Math.random()*(max-min)+min);
    }
    const rollDice=()=>{
        if(!selectedNumber){
            seterror("You have not selected any number")
            return;
        }
        seterror("")
        const randomnumber=generaterandomnumber(1,7);
        setcurrentDice((prev)=>randomnumber);
        if(selectedNumber===randomnumber) setScore(prev=>prev+randomnumber);
        else setScore(prev=>prev-2);
        setselectedNumber(undefined)
    }
    const resetScore=()=>{
        setScore(0);
    }
  return (
    <MainContainer>
        <div className='top_section'>
        <TotalScore score={score}/>
        <NumberSelector seterror={seterror} error={error} selectedNumber={selectedNumber} setselectedNumber={setselectedNumber}/>
        </div>
        <RollDice currentDice={currentDice} rollDice={rollDice}/>
        <div className="btns">
            <OutlineButton onClick={resetScore}>Reset</OutlineButton>
            <Button onClick={()=>{setShowRules((prev)=>!prev)}}>{showRules ? "Hide" : "Show"} Rules</Button>
        </div>
        {showRules && <Rules/>}
    </MainContainer>
  )
}

export default Gameplay
 const MainContainer=styled.main`
 padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns{
        margin-top:40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 10px;
    }
 `