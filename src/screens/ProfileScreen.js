import React from 'react'
import "./ProfileScreen.css"
import Nav from '../Nav'
import { selectUser } from "../features/userSlice";
import { useSelector } from 'react-redux';
import {auth} from "../firebase"

function ProfileScreen() {
  const user=useSelector(selectUser);
  return (
    <div className=' ProfileScreen'>
        <Nav />
        <div className='profilescreen-body'>
          <h1>Edit Profile</h1>
          <div className='profilescreen-info'>
            <img src='https://www.w3schools.com/howto/img_avatar.png' alt='' />
            <div className="profilescreen-details">
              <h2>{user.email}</h2>
              <div className='profilescreen-plans'>
                <h3>Plans</h3>

                <button onClick={()=> auth.signOut()} className='profilescreen-signout'>Sign Out</button>

              </div>

            </div>
          </div>
        </div>

    </div>
  )
}

export default ProfileScreen