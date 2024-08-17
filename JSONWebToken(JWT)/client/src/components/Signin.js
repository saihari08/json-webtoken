import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import {Link, useNavigate} from "react-router-dom";

function Signin() {

  let navigate=useNavigate();
  let emailInputRef=useRef();
  let passwordInputRef=useRef();
  let dispatch=useDispatch();

  useEffect(()=>{
  //  emailInputRef.current.value=localStorage.getItem("email");
    //passwordInputRef.current.value=localStorage.getItem("password");
    if(localStorage.getItem("token")){
      validateToken();
    }
  },[]);

let validateCredentials=async()=>{
  let dataToSend=new FormData();
  dataToSend.append("email",emailInputRef.current.value);
  dataToSend.append("password",passwordInputRef.current.value);

  let reqOption={
    method:"POST",
    body:dataToSend
  }

  let JSONData=await fetch("http://localhost:2120/login",reqOption);
  
  let JSOData=await JSONData.json();
  
if(JSOData.status =="success"){
  
localStorage.setItem("token",JSOData.data.token);//22.42

    dispatch({type:"login",data:JSOData.data});
    navigate("/dashboard");
  }else{
    alert(JSOData.msg)
  }
    console.log(JSOData);
};

let validateToken=async()=>{
  let dataToSend=new FormData();
  dataToSend.append("token",localStorage.token);

  let reqOption={
    method:"POST",
    body:dataToSend,
  };
  let JSONData=await fetch("http://localhost:2120/validateToken",reqOption);

  let JSOData=await JSONData.json();
  console.log(JSOData);
  if(JSOData.status =="success"){
  
    localStorage.setItem("token",JSOData.data.token);//22.42
    
        dispatch({type:"login",data:JSOData.data});
        navigate("/dashboard");
      }else{
        alert(JSOData.msg)
      }
        console.log(JSOData);
    

}
  return (
<div className='App'>
<form>
    <h2 style={{backgroundColor:"grey",borderRadius:"25px",color:"black",
      boxShadow:"10px 10px 10px black"
    }}>Login</h2>
    
    <div> 
      <input ref={emailInputRef} type="text" placeholder='Email-id' ></input>
    </div>
        
    <div> 
      <input ref={passwordInputRef} type="text" placeholder='password' ></input>
    </div>
    
<div>  
  <button type="button" onClick={()=>{
      validateCredentials();
  }}>Login</button>   
  </div>

 <br></br>
 <Link to="/signup">Create Account</Link>
 
 </form>
</div>
  )
}
export default Signin


