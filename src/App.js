
import LoginForm from './LoginForm'
import DashBoard from './component/DashBoard'
import ErrorModal from './component/Modal'

import React,{useEffect, useState} from 'react'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(()=>{
    const storage=localStorage.getItem("logedIn")
    if (storage==="1")
    {
      setIsLoggedIn(true)
    }
    },[isLoggedIn])
  const clickLogin=(value)=>{
    setIsLoggedIn({isLoggedIn:value})
    return value
  }
  
  const clickLogout=()=>{
    setIsLoggedIn(false)
  }
   return (
  
      <>
     
       {!isLoggedIn && 
    <LoginForm clickLogin={clickLogin}/>
       }
       {isLoggedIn && 
       <div><DashBoard  data={clickLogout}/>
       <ErrorModal>Succ</ErrorModal></div>}
    
    </>
  
   )
   
}