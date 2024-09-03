import React from 'react'
import UserSidenav from './partials/UserSidenav';
import UserTopnav from './partials/UserTopnav';

const UserHome = () => {
    document.title = "Healio | User_Homepage";
  return (
    <div className='flex'>
        <UserSidenav />

        <div className='w-[80%] h-100vh flex items-center justify-center border-8 border-[#4AB88B] bg-zinc-200'>
        <UserTopnav />
            <h1 className='text-[#4AB88B] text-5xl font-bold'>What Would You Like to do?</h1>
            <img src="./Doctor.png" alt="" />
        </div>
    </div>
  )
}

export default UserHome