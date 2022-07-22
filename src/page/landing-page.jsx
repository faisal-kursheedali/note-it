import React from 'react'
import {TxtArea, TxtCardList }from '../component/import'
import {
  v4 as uuidv4
} from 'uuid'
import "./css/landing-pg.css"
const LandingPg = () => {
  const data={
    lableId: uuidv4(),
    lableTitle:"Recently viewed",
    lableCard:[
      {
        cardId:uuidv4(),
        cardTitle:"heyy sunday",
        cardNote:"hii guys how are you all..."
      }
    ]
  }
  return (
        <>
        <TxtArea/>
        <div className="landing-pg-lable-container">
        <TxtCardList data={data}/>
        </div>
        
        
        </>
  )
}

export default LandingPg