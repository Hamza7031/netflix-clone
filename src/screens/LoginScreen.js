import React, { useState } from 'react'
import "./LoginScreen.css"
import SignupScreen from "./SignupScreen";

function LoginScreen() {

const[signIn, setSignIn]=useState(false);


  return (
    <div className='loginScreen'>
      <div className="loginscreen-background">
        <img className='loginscreen-logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

        <button onClick={()=> setSignIn(true)} className='loginscreen-button'>
          Sign In
        </button>

        <div className='loginscreen-gradient'>
        </div>
<div className="loginscreen-body">
  {signIn ? (
    <SignupScreen />
  ):(
    <>
  <h1>Unlimited films, TV programs and more</h1>
  <h2>Watch anywhere. Cancel at any time</h2>
  <h3>Ready to Watch? Enter your email to create or restart your membership</h3>
  <div className="loginscreen-input">
    <form>
      <input type="email" placeholder='Email Address' />
      <button onClick={()=> setSignIn(true)} className='loginscreen-btn'>
        GET STARTED
      </button>
    </form>
  </div>
  
  </>
  )}
  
</div>

      </div>

    </div>
  )
}

export default LoginScreen