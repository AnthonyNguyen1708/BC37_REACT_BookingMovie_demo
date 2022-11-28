import React from "react";

const Header = () => {
  return (
    <header className="bg-slate-900 h-20">
      <div className="container h-full mx-auto text-white flex justify-between items-center">
        <a href className="text-4xl ">
          Logo
        </a>
        <div>
          <a href className="text-lg ">
            Login
          </a>
          <span className="text-lg px-2">|</span>
          <a href className="text-lg ">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
