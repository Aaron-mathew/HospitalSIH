import React from 'react'
import { Link } from 'react-router-dom'

const UserSidenav = () => {
  return (
    <div className="w-[20%] h-[100vh] border-r-2 border-zinc-400 p-10 overflow-y-auto">
      <h1 className='text-2xl font-bold'>
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span className='text-2xl'>HEALIO.</span>
      </h1>
      <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
        <h1 className='text-black font-semibold text-xl mt-10 mb-5'>New Feeds</h1>
        <Link to="/BookAppointment" className='hover:bg-[#6556CD] hover:text-black duration-300 rounded-lg p-5'><i className="mr-2 ri-fire-fill"></i>Book Appointment</Link>
        <Link to="/AllAppointmentsOfUserPage" className='hover:bg-[#6556CD] hover:text-black duration-300 rounded-lg p-5'><i className="mr-2 ri-bard-fill"></i>Appointment Status</Link>
        <Link to="/DeleteAppointment" className='hover:bg-[#6556CD] hover:text-black duration-300 rounded-lg p-5'><i className="mr-2 ri-close-large-line"></i> Delete Appointment</Link>
        {/* <Link to="/tv" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'><i className="mr-2 ri-tv-2-fill"></i>sthth</Link>
        <Link to="/person" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'><i className="mr-2 ri-team-fill"></i>shtrht</Link> */}
      </nav>
      <hr className='mt-3 mb-3 border-none h-[1px] bg-zinc-400'/>
      <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
        {/* <h1 className='text-white font-semibold text-xl mt-10 mb-5'>Website Information</h1> */}
        <Link className='hover:bg-[#6556CD] hover:text-black duration-300 rounded-lg p-5'><i className="mr-2 ri-information-fill"></i> Logout</Link>
        {/* <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'><i className="mr-2 ri-phone-fill"></i> Contact Us</Link> */}
      </nav>
    </div>
  )
}

export default UserSidenav