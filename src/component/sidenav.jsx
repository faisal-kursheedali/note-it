import React,{useState} from 'react'
import "./css/sidenav.css"
import {AiOutlineBulb}from"react-icons/ai"
import {MdOutlineLabel}from"react-icons/md"
import {FiEdit2}from"react-icons/fi"
import {FaRegTrashAlt}from"react-icons/fa"
import {BiArchiveIn}from"react-icons/bi";
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import { changeEdit } from '../app/feature/editlable'
import { useDispatch } from 'react-redux'
import { IoIosPaper  } from 'react-icons/io'

const Sidenav = () => {
    const state=useSelector(state=>state.lable);
    // const [edit, setEdit] = useState(state.isEdit);
    const dispatch=useDispatch()
    const lable=state;
  return (
    <div className="sidenav">
        <ul className="sidenav-list">
            <li className="sidenav-list-item" key={1}>
            <Link to={`/`} className="sidenav-link">
            <IoIosPaper style={{color:"rgb(21, 189, 189)"}} /> <div className="sidenav-list-lable">Create note</div>
              </Link>
              </li>
            {
              lable.map(i=>{
                
                console.log(i)
                    return(<Link to={`/lable:${i.lableId}`} state={{data:i}}
                     className="sidenav-link"><li className="sidenav-list-item" key={i.lableId}><MdOutlineLabel/><div className="sidenav-list-lable">{i.lableTitle}</div></li></Link> )
                })
            }
            <li className="sidenav-list-item" key={2} onClick={()=>{
              
              dispatch(changeEdit());
            }}><FiEdit2/> <div className="sidenav-list-lable">Edit</div></li>
            <li className="sidenav-list-item" key={3}>
              <Link to={`/archive`} className="sidenav-link">
              <BiArchiveIn/><div className="sidenav-list-lable">Archive</div>
              </Link>
              </li>
            <li className="sidenav-list-item" key={4}>
              <Link to={`/delete`} className="sidenav-link">
              <FaRegTrashAlt/> <div className="sidenav-list-lable">Delete</div>
              </Link>
              </li>
        </ul>
    </div>
  )
}

export default Sidenav