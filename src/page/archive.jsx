import React from 'react';
import "./css/archive.css";
import {BiArchiveIn} from "react-icons/bi";

const Archive = () => {
  return (
    <div className="archive-container">
        <div className="archive-empty-box">
          <div className="archive-empty-logo">
            <BiArchiveIn/>
          </div>
          <div className="archive-empty-title">
            Empty Archive
          </div>
        </div>
    </div>
  )
}

export default Archive