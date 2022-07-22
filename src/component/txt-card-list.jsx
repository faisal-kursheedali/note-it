import React from 'react'
import "./css/txt-card-list.css"
import {TxtCard} from "./import"

const TxtCardList = ({data}) => {
  console.log(data);
    const {lableCard,lableTitle}=data;
    const arr=lableCard;
    const title=lableTitle;
  return (
    <>
    <>
    <div className="txt-card-list-title">{title}</div>
    <ul className="txt-card-list">
    
    {
        arr.map(i=>{
            return(<li className='txt-card-list-item'key={i.cardId} > <TxtCard data={i}/> </li>)
        })
    }
    </ul>
    </>
    </>
  )
}

export default TxtCardList