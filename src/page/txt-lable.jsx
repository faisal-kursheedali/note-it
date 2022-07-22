import React from 'react'
import { TxtCardList } from '../component/import'
import "./css/txt-lable.css";
import { useLocation } from "react-router-dom"

const TxtLable = () => {
    const location = useLocation();
    const {data}=location.state;
    console.log(data);
  return (
    <TxtCardList data={data}/>
  )
}

export default TxtLable