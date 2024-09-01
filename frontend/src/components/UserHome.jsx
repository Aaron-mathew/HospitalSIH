import React from 'react'
import UserSidenav from './partials/UserSidenav';

const UserHome = () => {
    document.title = "Healio | User_Homepage";
  return (
    <div className='flex'>
        <UserSidenav />
        <div className='w-[80%] h-100vh flex items-center justify-center border-8 border-[#6556CD]'>
            <h1 className='text-[#6556CD] text-5xl font-bold'>What Would You Like to do?</h1>
            <img src="./Doctor.png" alt="" />
        </div>
    </div>
  )
}

export default UserHome