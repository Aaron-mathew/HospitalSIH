import React from 'react'
import UserSidenav from './partials/UserSidenav';

const BookAppointmentPage = () => {
    document.title = "Healio | User_Homepage";
  return (
    <div className='flex'>
        <UserSidenav />
        <div className='w-[80%] h-100vh flex items-center justify-center'>
            
        </div>
    </div>
  )
}

export default BookAppointmentPage