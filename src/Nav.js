import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import "./Nav.css"

function Nav() {
const [show, handleshow]=useState(false);
// const history=useHistory()
const navigate = useNavigate()

const transitionNavBar=()=>{
    if (window.scrollY>100){
        handleshow(true);
    }
    else{
        handleshow(false);
    }
};

useEffect(()=> {
    window.addEventListener("scroll", transitionNavBar);
    return()=> window.removeEventListener("scrool", transitionNavBar);
}, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>

    <div className='nav_content'>
    <img onClick={() => navigate('/')} className='nav_logo'
     src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt=''/>
    
    <img onClick={() => navigate('/profile')}
     className='nav_avatar'
     src='https://www.w3schools.com/howto/img_avatar.png' alt='' />
      
    </div>
   
    </div>
  )
}

export default Nav
