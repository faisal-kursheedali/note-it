import React from 'react'
import "./css/delete.css"
import {FaTrashAlt} from "react-icons/fa"

const Delete = () => {
  return (
    <div className="del-container">
        <div className="del-empty-box">
          <div className="del-empty-logo">
            <FaTrashAlt/>
          </div>
          <div className="del-empty-title">
            Nothing on Trash
          </div>
        </div>
    </div>
  )
}

export default Delete