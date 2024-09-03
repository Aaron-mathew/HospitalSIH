import React from 'react'
import ManagementSidenav from './partials/ManagementSidenav'

const ManagementHome = () => {
    return (
        <div className='flex'>
            <ManagementSidenav />
            <div className='w-[80%] h-100vh flex items-center justify-center border-8 border-[#6556CD]'>
                <h1 className='text-[#6556CD] text-5xl font-bold'>What Would You Like to do?</h1>
                <img src="./Doctor.png" alt="" />
            </div>
        </div>
      )
}

export default ManagementHome