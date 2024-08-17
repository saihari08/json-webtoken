import { useSelector } from 'react-redux'
import TopNavigation from './TopNavigation'
import { Link, useLocation } from 'react-router-dom'

function Dashboard() {
  

  let storeObj=useSelector((store)=>{
    
    return store;
  })
  
  return (
    <div className='dashboard'>
      <TopNavigation></TopNavigation>
      <h2>Welcome{storeObj.loginDetails.firstName}{" "}{storeObj.loginDetails.lastName}</h2>
     <img  src={`http://localhost:2120/${storeObj.loginDetails.profilePic}`}></img>
      </div>
  )
}

export default Dashboard
