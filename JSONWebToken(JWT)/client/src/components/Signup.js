import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    let firstNameInputRef=useRef();
    let lastNameInputRef=useRef();
    let stateSelectRef=useRef();
    let emailInputRef=useRef();
    let passwordInputRef=useRef();
    let phoneInputRef=useRef();
    let ProfilePicInputRef=useRef();
    let msgLabelRef=useRef();
    let salutation;
    let ageinputRef=useRef();
    
 let [ProfilePic,setProfilePic]=useState("./images/noimage.png");  

let onCreateAccountClick=async()=>{
     let DataToSend={
        firstName:firstNameInputRef.current.value,
        lastName:lastNameInputRef.current.value,
        age:ageinputRef.current.value,
        email:emailInputRef.current.value,
        password:passwordInputRef.current.value,
        ProfilePic:ProfilePicInputRef.current.value,
        phone:phoneInputRef.current.value,
        };
let JSONDataToSend=JSON.stringify(DataToSend);
    console.log(DataToSend);
    console.log(JSONDataToSend);

let myHeader=new Headers();
myHeader.append("content-type","application/json");

let reqOption={
    method:"POST",
    body:JSONDataToSend,
    header:myHeader,
};
let JSONData=await fetch("http://localhost:2120/signup",reqOption);
let JSOData=await JSONData.json();
alert(JSOData.msg);
console.log(JSOData);
};


let onCreateAccountClickURLE=async()=>{
    let myHeader=new Headers();
    myHeader.append("content-type" ,"application/x-www-form-urlencoded")

    let dataToSend=new URLSearchParams()
dataToSend.append("firstName",firstNameInputRef.current.value)
dataToSend.append("lastName",firstNameInputRef.current.value)
dataToSend.append("age",ageinputRef.current.value)
dataToSend.append("email",emailInputRef.current.value)
dataToSend.append("password",passwordInputRef.current.value)
dataToSend.append("phoneNo",phoneInputRef.current.value)
dataToSend.append("profilePic",ProfilePicInputRef.current.value)

let reqOption={
    method:"POST",
    header:myHeader,
    body:dataToSend,
}
let JSONData=await fetch("http://localhost:2120/signup",reqOption)
let JSOData=await JSONData.json();
alert(JSOData.msg);
console.log(JSOData);
}

let onCreateAccountClickFD=async()=>{
    
    let dataToSend=new FormData();
dataToSend.append("firstName",firstNameInputRef.current.value)
dataToSend.append("lastName",firstNameInputRef.current.value)
dataToSend.append("age",ageinputRef.current.value)
dataToSend.append("email",emailInputRef.current.value)
dataToSend.append("password",passwordInputRef.current.value)
dataToSend.append("phoneNo",phoneInputRef.current.value)
//dataToSend.append("profilePic",ProfilePicInputRef.current.value)

for(let i=0;i<ProfilePicInputRef.current.files.length;i++){
   dataToSend.append("profilePic",ProfilePicInputRef.current.files[i]);
}


let reqOption={
    method:"POST",
    body:dataToSend,
}
let JSONData=await fetch("http://localhost:2120/signup",reqOption)
let JSOData=await JSONData.json();
alert(JSOData.msg);
console.log(JSOData);
}

return (
<div className='App'>
<form>
    <h2 style={{backgroundColor:"grey",borderRadius:"25px",color:"black",
      boxShadow:"10px 10px 10px black"}}>Signup</h2>
    
       <div> 
        
        <input ref={firstNameInputRef} type="text" placeholder='FirstName'></input>
    

        <input ref={lastNameInputRef} type="text" placeholder='lastName'></input>
        
       </div>   

    <div> 
     
    <input type="text" placeholder='email'ref={emailInputRef} ></input>
   
    
    <input type="text" placeholder='password'ref={passwordInputRef}></input>
    </div>
    
    <div> 
    <input type="text" placeholder='phone-no'ref={phoneInputRef}></input>

        <ladel>State</ladel>
        <select ref={stateSelectRef}>
            <option value="AP">Andhra Pradesh</option>
            <option>Telangana</option>
            <option>Karnataka</option>
            <option value="TN">TamilNadu</option>
            <option>Kerala</option>
        </select>
        </div>

    <div>   
     
    <input type="text" placeholder='address'></input>

    
    <input ref={ageinputRef} type="text" placeholder='age' onChange={()=>{
            let age=Number(ageinputRef.current.value);

            if(age <5){
                console.log(`infant`);
            } else 
            if(age>=5 && age <=10){
                console.log(`kid`);
            } else 
            if(age>10 && age<=15){
                console.log(`Teen`);
            } else 
            if(age >15 && age <25){
                console.log(`youth`);
            } else 
            if(age >30 && age <50){
                console.log(`middle aged`)
            }else 
            if(age >50 && age <70){
                console.log(`old aged`)
            }else
                console.log(`not a valid age`);
        }}></input>
   </div>
     
        
   <div>
    <label>ProfilePic</label>
    <input ref={ProfilePicInputRef}  type="file" accept="image/*"onChange={(eo)=>{
        console.log(eo.target.files);
    let selectedimagepath=URL.createObjectURL(eo.target.files[0])
    setProfilePic(selectedimagepath)
    console.log(selectedimagepath)
    }}></input>
    <br></br>
    <img src={ProfilePic} className="profileviewer"></img>
   </div>


<div> 
<button type="button" onClick={()=>{
    onCreateAccountClick();
}}>Signup</button>
</div>

<button type="button" onClick={()=>{
    onCreateAccountClickURLE();
}}>Signup(URLE)</button>

<button type="button"onClick={()=>{
    onCreateAccountClickFD();
}}>Signup(FD)</button>

<div>
    <label ref={msgLabelRef}></label>
</div>

<br></br>
    <Link to="/">Signin</Link> 
</form>
</div>
  )
}

export default Signup
