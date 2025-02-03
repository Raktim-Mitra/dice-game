import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
const NumberSelector = ({seterror,error,selectedNumber,setselectedNumber}) => {
    const arr=[1,2,3,4,5,6];
    const numberSelectorhandler=(value)=>{
        setselectedNumber(value);
        seterror("");
    }
  return (
    <NumberSelectorContainer>
    <p className='error'>{error}</p>
    <div className='flex'>
       {arr.map((value,i)=>(
        <Box 
        isSelected={value===selectedNumber}
        key={i} 
        onClick={
          ()=>  numberSelectorhandler(value)
        }>{value}</Box>
       ))}
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector
const NumberSelectorContainer=styled.div`
 display: flex;
 flex-direction: column;
 align-items: end;
 .error{
    color: red;
 }
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
    }
`
const Box=styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=>props.isSelected ? "black": "white"};
    color: ${(props)=>!props.isSelected ? "black": "white"};
`