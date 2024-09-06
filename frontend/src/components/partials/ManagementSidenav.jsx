import React from 'react';
import { Link } from 'react-router-dom';

const ManagementSidenav = () => {
  return (
    <div className="relative w-[20%] h-[100vh] bg-[#596F93] border-r-2 border-[#ffffff]">
      <div className="absolute top-0 left-0 w-full bg-white flex justify-center items-center p-2">
        {/* Wrap the logo with Link to navigate to home */}
        <Link to="/ManagementHome">
          <img className='w-[20vh]' src="./Healio_Logo_new.png" alt="Healio Logo" />
        </Link>
      </div>
      <div className="pt-[14vh] p-10 overflow-y-auto">
        <nav className='flex flex-col text-[#E1E5F2] text-xl gap-3'>
          <h1 className='text-[#4AB88B] font-semibold text-xl mt-1 mb-1'>Abilities</h1>
          <Link to="/ManagementCurrentAppointment" className='hover:bg-[#4AB88B] hover:text-[#596F93] duration-300 rounded-lg p-5'>
            <i className="mr-2 ri-bard-fill"></i>Current Appointment
          </Link>
          <Link to="/NewManagementAppointments" className='hover:bg-[#4AB88B] hover:text-[#596F93] duration-300 rounded-lg p-5'>
            <i className="mr-2 ri-notification-4-fill"></i>New Appointments
          </Link>
          <Link to="/ManagementAddAppointment" className='hover:bg-[#4AB88B] hover:text-[#596F93] duration-300 rounded-lg p-5'>
            <i className="mr-2 ri-fire-fill ri-bard-fill"></i>Add Appointment
          </Link>
          <Link to="/ManagementDeleteAppointment" className='hover:bg-[#4AB88B] hover:text-[#596F93] duration-300 rounded-lg p-5'>
            <i className="mr-2 ri-close-large-line"></i>Delete Appointment
          </Link>
          <Link to="/BedManagement" className='hover:bg-[#4AB88B] hover:text-[#596F93] duration-300 rounded-lg p-5'>
            <i className="mr-2 ri-hotel-bed-fill"></i>Bed Management
          </Link>
          <Link to="/InventoryManagement" className='hover:bg-[#4AB88B] hover:text-[#596F93] duration-300 rounded-lg p-5'>
            <i className="mr-2 ri-medicine-bottle-fill"></i>Manage Inventory
          </Link>
        </nav>
        <hr className='mt-5 mb-5 border-none h-[1px] bg-[#4AB88B]' />
        <nav className='flex flex-col text-[#E1E5F2] text-xl gap-3'>
          <Link to = '/' className='hover:bg-[#4AB88B] hover:text-[#596F93] duration-300 rounded-lg p-5'>
            <i className="mr-2 ri-information-fill"></i>Logout
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default ManagementSidenav;
