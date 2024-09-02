import React from 'react';
import UserSidenav from './partials/UserSidenav';


const BookAppointmentPage = () => {
  document.title = "Healio | User_Homepage";
  
  return (
    <div className="flex">
      <UserSidenav />
      <div className="w-[80%] h-100vh flex items-center justify-center bg-[url('')]">
        <form className="bg-white p-8 rounded shadow-lg shadow-[#6556CD] w-full max-w-lg bg-[#6656cd27]">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#6556CD]">Book Appointment</h2>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Patient Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter patient's name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#6556CD]"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
              Age
            </label>
            <input
              id="age"
              type="number"
              placeholder="Enter patient's age"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#6556CD]"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#6556CD]"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medical-file">
              Medical File
            </label>
            <input
              id="medical-file"
              type="file"
              className="w-full px-3 py-2 border border-[#6656cd92] rounded"
            />
          <h4 className="text-sm text-gray-600">
            Please merge all your files into a single PDF before uploading.
          </h4>
          </div>
          <button
            type="submit"
            className="w-full bg-[#6556CD] text-white font-bold py-2 px-4 rounded hover:bg-[#5042a4]">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointmentPage;
