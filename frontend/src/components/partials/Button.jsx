import React from "react";

const Button = ({ title }) => {
  return (
    <div style={{ textAlign: 'left' }}>
      <button className="bg-black text-white rounded-full hover:shadow-black  shadow-md py-2 px-4">
        {title}
      </button>
    </div>
  );
};

export default Button;
