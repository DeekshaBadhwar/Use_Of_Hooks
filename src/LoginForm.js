import React, { useReducer, useState,useEffect } from 'react'

export default function LoginForm(props) {
    
   const  emailReducer=(state,action)=>{
    switch(action.type)
    {
            case "USER_INPUT":            
                return(
                    
                    {...state,email:action.value}
                      )
             case "PASSWORD":
                 return(
                     {...state,password:action.value}
                 )  
                                           
                default:
                return state               
    }
   }
 const initialvalue={
    email:'',
    password:'',

}
    const [state,dispatch]=useReducer(emailReducer,initialvalue)
    
const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(state)
    localStorage.setItem("logedIn","1")
    props.clickLogin(true)
}
const [isOpen,setOpen]=useState(false)
        return (
            <form className="App"onSubmit={handleSubmit}>

           <label>email</label>
        <input type='text' required placeholder='enter your email' 
        onChange={(e)=>{dispatch({type:"USER_INPUT", value:e.target.value})}}/>

         <label>password</label>
         <input type='password' className="text"  required placeholder='enter yourr password' 
         onChange={(e)=>{dispatch({type:"PASSWORD",value:e.target.value})}}/>

      <input type='submit'  onClick={()=>{setOpen(true)}} required  value='LOGIN'/>
     
      </form>
    )
  }
  
