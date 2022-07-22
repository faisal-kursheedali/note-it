import React, { useState } from 'react'
import "./css/txt-card.css"
import { BiExpand, BiArchiveIn } from "react-icons/bi"
import { IoMdColorPalette } from "react-icons/io"
import { BsThreeDotsVertical } from "react-icons/bs"

const TxtCard = ({data}) => {
    const {cardNote,cardTitle}=data;

    const [hover, setHover] = useState(false)
    let visible = hover ? "visible" : "hidden"
    return (
        <>

            <div className="txt-card-container" onMouseEnter={() => setHover(prev => prev = true)} onMouseLeave={() => setHover(prev => prev = false)}>
                <div className="txt-card-title">
                    {cardTitle}
                </div>
                <div className="txt-card-content">
                    {cardNote}
                </div>
                
                    
                    < ul className="txt-card-btn-list" style={{visibility:`${visible}`}}>

                        <li className="txt-card-btn-list-item"><IoMdColorPalette /></li>
                        <li className="txt-card-btn-list-item"><BiArchiveIn /></li>
                        <li className="txt-card-btn-list-item"><BsThreeDotsVertical /></li>
                    </ul>
                    <div className="txt-card-expand" style={{visibility:`${visible}`}}><BiExpand /></div>
                   
            </div>

        </>
    )
}

export default TxtCard