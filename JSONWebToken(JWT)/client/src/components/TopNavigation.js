import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function TopNavigation() {

let navigate=useNavigate();

  let storeObj=useSelector((store)=>{
    return store;
  })

  useEffect(()=>{
    if(storeObj.loginDetails.email){
    }else{
      Navigate("/");
    }
    
  },[])
  return (
   <nav>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/tasks">Tasks</Link>
    <Link to="/leaves">Leaves</Link>
    <Link to="/">Logout</Link>
   </nav>
  )
}

export default TopNavigation
