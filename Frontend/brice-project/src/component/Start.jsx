import React from 'react'
import { useNavigate } from 'react-router-dom'
import Brice from "../component/IMAGES/Brice.svg";
const Start = () => {
    const navigation=useNavigate()
  return (
    <div className=" d-flex justify-content-center align-items-center vh-100 loginpage">
    <div className="m-5">
      <img src={Brice} alt="hero" />
    </div>
    <div className="p-3 rounded w-25 border loginForm">
      <h2 className='text-center'>Login As</h2>
      <div className='d-flex justify-content-between mt-5 mb-2'>
        <button type='button' className='btn btn-primary' onClick={()=>{navigation('/students_login')}}>Students</button>
        <button type='button' className='btn btn-success'onClick={()=>{navigation('/adminlogin')}}>Admin</button>
      </div>
    </div>
  </div>
  )
}

export default Start