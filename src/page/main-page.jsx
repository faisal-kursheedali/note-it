import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { EditLable, Sidenav } from '../component/import'
import "./css/main-page.css"
import { LandingPg, TxtLable,Archive,Delete} from './import'
import { useSelector } from 'react-redux'

const MainPage = () => {
  const state = useSelector(state => state.editLable);
  const [editLable, setEditLable] = useState(state.isEdit);
  console.log(editLable);
  console.log(state);
  useEffect(() => {
    setEditLable(crr=>crr=state.isEdit)
  }, [state.isEdit]);
  return (
    <div className="main-container">

      <div className="side-container">

        <Sidenav />
      </div>

      <div className="main-content">

        <Routes>
          <Route path="/" exact element={<LandingPg />}></Route>
          <Route path="/lable:id" exact element={<TxtLable />}></Route>
          <Route path="/archive" exact element={<Archive />}></Route>
          <Route path="/delete" exact element={<Delete/>}></Route>
        </Routes>
      </div>
      {

       editLable? <div className="edit-lable-container">
        <div className="edit-lable">

        <EditLable />
        </div>
        </div>:""
      }
    </div>
  )
}

export default MainPage