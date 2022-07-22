import React, { useState, useEffect } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import { IoIosPaper } from "react-icons/io"
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"
import {Link} from "react-router-dom"
import "./css/nav.css"

const Nav = () => {
    const [darkmode, setDarkmode] = useState(false);
    useEffect(() => {
        if (darkmode) {
            document.body.style.backgroundColor = "black"
            document.body.style.color = "white"
        } else { document.body.style.backgroundColor = "initial";document.body.style.color = "initial" }
    }, [darkmode])
    return (
        <>

            <div className=" nav">
                    <Link to="/" className="bui-link-nostyle">
                <div className="bui-nav-logo nav-logo">
                    <div className="nav-menu"><AiOutlineMenu /></div>
                    <IoIosPaper />  Note it
                </div>
                    </Link>
                <input type="text" className="bui-input-sm nav-search" placeholder='search' />
                <ul className=" nav-list">
                    <li className="nav-list-item nav-darkmode-btn" onClick={() => {
                        setDarkmode(!darkmode)
                    }}>
                        {
                            darkmode ? <BsFillSunFill /> : <BsFillMoonStarsFill />
                        }
                    </li>

                    <li className="nav-list-item">
                        <img src="https://www.w3schools.com/w3images/avatar6.png" alt="" className="bui-avatar-xsm bui-avatar-rnd" />
                    </li>

                </ul>

            </div>

        </>
    )
}

export default Nav