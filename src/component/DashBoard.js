import React from 'react'

export default function DashBoard(props) {
  const logOut=()=>{
localStorage.removeItem("logedIn")
props.data()
  }
   
        return (
          <div className="App">
            <div className="navbar">
              <h1 className="App">DashBoard</h1>
              <p className="App">Currently you have logged in.....</p>
              <button className="logout" onClick={logOut}>
                 LogOut 
                  </button>
            </div>
            </div>
        )
}
