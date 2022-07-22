import React, { useState } from 'react'
import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai"
// import {  AiFillEdit } from "react-icons/ai"
// import { MdLabel, MdDone } from "react-icons/md"
// import { IoMdTrash } from "react-icons/io"
import {AiOutlineEdit} from "react-icons/ai"
import "./css/edit-label.css"
import { useSelector } from 'react-redux'

const EditLable = () => {
    const state=useSelector(state=>state.lable);
    const arr=state;
    
    // const [addLabel, set] = useState(true)
    const [addLabel, setAddlabel] = useState(true)
    const [editLabel, setEditLabel] = useState(false)
    // const [editLabelName, setEditlabelName] = useState("")
    const [label, setLabel] = useState(["faisal", "birth day"])
    const [newlabel, setNewlabel] = useState("")
    // this is useless
    label;
    // 
    return (
        <div className="edit-label-box">
            <div className="edit-label-head">
                Edit label
            </div>
            <div className="add-label-section">
                <div className="add-label-icn" onClick={() => {
                    setAddlabel(!addLabel)
                }}>
                    {
                        addLabel ? <AiOutlineCloseCircle onClick={() => setNewlabel("")} /> : <AiOutlinePlusCircle />
                    }
                </div>
                <input type="text" className="edit-section-input" placeholder='create new label' onChange={(i) => {
                    setAddlabel(prev => prev = true)
                    setNewlabel(i.target.value)
                }} value={newlabel} />
                <div className="edit-section-done-icn">
                    {
                        addLabel ? <MdDone onClick={()=>{
                            setLabel(prev=>[...prev,newlabel]);
                            setNewlabel("");
                            setAddlabel(prev => prev = false);
                        }} /> : ""
                    }
                </div>
            </div>
            <ol className="edit-lable-list">
                {
                    arr.map(i=>{
                        return(
                            <>
                            
                                <li className="edit-lable-list-item" key={i.lableId}>
                                    <div className="edit-lable-title">
                                    {
                                        editLabel?(
                                            <>
                                            <input type="text" className="edit-lable-title-input" value={i.labelTitle} />
                                            </>
                                        ):(
                                            <>
                                            {i.lableTitle}
                                            </>
                                        )
                                    }
                                    </div>
                                    <div className="edit-lable-icn">
                                        <AiOutlineEdit onClick={()=>{
                                            setEditLabel(curr=>curr=!curr)
                                        }}/>
                                    </div>
                                </li>
                            
                            </>
                        )
                    })
                }
            </ol>
           
        </div>
    )
}

export default EditLable


//  <ul className="label-display-list">
//                 {
//                     label.map((i, index) => {
//                         // a(i);
//                         return (<li className="label-display-list-item">
//                             <div className="label-display-list-item-icn">
//                                 {
//                                     editLabel ? <IoMdTrash /> : <MdLabel />
//                                 }
//                             </div>
//                             {editLabel ? (
//                                 <input type="text" className="edit-label-list-item-input" value={editLabelName} onChange={(e) => {
                                    
//                                     a(e.target.value);
//                                 }}placeholder={label[index]} />
//                             ) : (<div className="label-display-list-item-txt">{label[index]}</div>)
//                             }


//                             <div className="label-display-list-item-done" >
//                                 {
//                                     editLabel ? <MdDone onClick={() => {
//                                         setEditlbel(prev => prev = false);
//                                         label[index] = editLabelName;
//                                     }} /> : <AiFillEdit onClick={() => {
//                                         setEditlbel(prev => prev = true)
//                                     }} />
//                                 }
//                             </div>
//                         </li>)
//                     })
//                 }

//             </ul>