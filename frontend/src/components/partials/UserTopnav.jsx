import React from 'react';

const UserTopnav = () => {
  return (
    <div className="bg-white w-full p-[1.9vh] flex items-center justify-between">
      <div className="w-[40%]">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4AB88B] bg-[#4AB88B] text-white placeholder-white"
        />
      </div>
      <div className="flex items-center gap-4">
        <img src="./user_icon.jpg" alt="User Icon" className="w-[6vh] h-[6vh] rounded-full border-2 border-[#4AB88B]" />
        <div className="text-[#4AB88B] text-xl">
          Welcome, User
        </div>
      </div>
    </div>
  );
};

export default UserTopnav;
