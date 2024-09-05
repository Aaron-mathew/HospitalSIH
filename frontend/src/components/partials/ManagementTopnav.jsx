import React from 'react';

const UserTopnav = () => {
  return (
    <div className="bg-white w-full p-[1.9vh] flex items-center justify-between">
      <div className="relative w-[30%]"> {/* Reduced the width */}
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4AB88B] bg-white text-black placeholder-gray-500 border border-[#4AB88B]" // Updated here
        />
        <i className="ri-search-line absolute right-3 top-1/2 transform -translate-y-1/2 text-[#4AB88B] text-xl"></i> {/* Search Icon */}
      </div>
      <div className="flex items-center gap-4">
        <i className="ri-notification-3-line text-[#4AB88B] text-3xl cursor-pointer"></i> {/* Notification Icon */}
        <img src="./user_icon.jpg" alt="User Icon" className="w-[6vh] h-[6vh] rounded-full border-2 border-[#4AB88B]" />
        <div className="text-[#4AB88B] text-xl">
          Welcome, 
        </div>
      </div>
    </div>
  );
};

export default UserTopnav;
