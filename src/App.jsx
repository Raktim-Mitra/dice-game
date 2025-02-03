import { useState } from 'react'
import styled from 'styled-components'
import StartGame from './components/StartGame'
import GamePlay from './components/Gameplay';
function App() {
  const [isGameStarted,setIsGamestarted]=useState(false);
  const togglegamePlay=()=>{
    setIsGamestarted((prev)=>!prev);
  }

  return (
    <>
    {isGameStarted? <GamePlay/> :<StartGame toggle={togglegamePlay}/>}
    </>
  )
}

export default App
