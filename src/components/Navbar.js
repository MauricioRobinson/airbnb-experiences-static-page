import React from "react";

function Navbar() {
  return (
    <nav className="w-full h-24 shadow-lg flex items-center">
      <div className="w-28 h-16 flex justify-center items-center pl-8">
        <img
          src="./images/airbnb-logo-png-open-2000.png"
          alt="Logo de Airbnb"
          className="w-full object-cover"
        />
      </div>
    </nav>
  );
}
export default Navbar;
