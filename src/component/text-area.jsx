import React,{useState} from 'react'
import "./css/text-area.css"
import {IoMdColorPalette} from "react-icons/io"
import {BiArchiveIn,BiExpand} from "react-icons/bi"
import {BsThreeDotsVertical} from "react-icons/bs"

const TxtArea = () => {
    const[txtAreaSelected,setTxtAreaSelected]=useState(false)
    const[setting,setSetting]=useState(false)
    const[userNote,setuserNote]=useState({
      title:"",
      content:""
    })
  return (
    <>
    
        <div className="txt-box">
           
            {
                txtAreaSelected?(
                <>
                <input type="text" className="txt-title" placeholder='Enter the title' value={userNote.title} onChange={(e)=>{
                  setuserNote(prev=>prev={...prev,title:e.target.value})
                }} />
                <textarea name="" className='txt-content' id="" cols="30" rows="10" placeholder='Enter the note here'  value={userNote.content} onChange={(e)=>{
                  setuserNote(prev=>prev={...prev,content:e.target.value})
                }} ></textarea>
                <ul className="txt-btn-list">
                  <li className="txt-btn-list-item"><IoMdColorPalette className='txt-bgclr-change'/></li>
                  <li className="txt-btn-list-item"><BiArchiveIn className='txt-archive'/></li>
                  <li className="txt-btn-list-item txt-threedot"><BsThreeDotsVertical  onClick={()=>{
                   
                    setSetting(prev=>prev=!prev);
                  // document.body.addEventListener("click",()=>document.body.addEventListener("click",()=> setting?setSetting(prev=>prev=false):""))
                  
                  }}/>
                  {setting?<SettingModal/>:""}
                  </li>
                  <li className=" txt-btn-box">
                    <div className="txt-btn-save">Save</div>
                    <div className="txt-btn-close">Close</div>
                   </li>
                  
                  

                </ul>
                </>):( <input type="text" className="txt-title" value={"Take Note"} onClick={()=>setTxtAreaSelected(true)
            }/>)
            }
            <div className="txt-box-expand"><BiExpand/></div>
        </div>
    
    </>
  )
}

export default TxtArea

function SettingModal(){
  return(
    <>
      <ul className="setting-list">
        <li className="setting-list-item">Delete</li>
        <li className="setting-list-item">Add label</li>
      </ul>
    
    </>
  )
}