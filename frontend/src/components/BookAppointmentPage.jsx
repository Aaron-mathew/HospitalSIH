import React from 'react';
import UserSidenav from './partials/UserSidenav';

const BookAppointmentPage = () => {
  document.title = "Healio | User_Homepage";
  
  return (
    <div className="flex">
      <UserSidenav />
      <div className="relative w-[80%] h-[100vh] flex items-center justify-center bg-[url('./new_hospital_background.jpg')] bg-cover">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#00000099]"></div>
        <form className="relative bg-white p-10 rounded shadow-lg shadow-[#4AB88B] w-full max-w-xl bg-[#6656cd27]">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#4AB88B]">Book Appointment</h2>
          
          <div className="mb-4">
            <label className="block text-[#E1E5F2] text-sm font-bold mb-2" htmlFor="name">
              Patient Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter patient's name"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#4AB88B]"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-[#E1E5F2] text-sm font-bold mb-2" htmlFor="age">
              Age
            </label>
            <input
              id="age"
              type="number"
              placeholder="Enter patient's age"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#4AB88B]"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-[#E1E5F2] text-sm font-bold mb-2" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#4AB88B]"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-[#E1E5F2] text-sm font-bold mb-2" htmlFor="medical-file">
              Medical File
            </label>
            <input
              id="medical-file"
              type="file"
              className="w-full px-4 py-3 border border-[#4AB88B] rounded"
            />
            <h4 className="text-sm text-[#E1E5F2] mt-1">
              Please merge all your files into a single PDF before uploading.
            </h4>
          </div>
          <button
            type="submit"
            className="w-full bg-[#4AB88B] text-white font-bold py-3 px-4 rounded hover:bg-[#3a946c]">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointmentPage;
