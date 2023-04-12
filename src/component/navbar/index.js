import React from "react";
import logo from "../../gambar/logo.png";
import { Link } from "react-router-dom";

const Navbarr = () => {
  return (
    <div className="bg-#f1f5f9]  mt-1 shadow-[0_6px_20px_rgba(230,230,230,0.55)] sticky sm:flex justify-between text-center">
      <div className="w-20 mx-10 my-2 flex">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex mr-20 my-3 text-[#1e3a8a] font-bold">
        <h1 className="mx-4">
          <Link to="/">ABOUT US</Link>
        </h1>
        <h1 className="mx-4">
          <Link to="/ebook">E-BOOK</Link>
        </h1>
        <h1 className="mx-4">
          <Link to="/contact">CONTACT</Link>
        </h1>
        <h1 className="mx-4">
          <Link to="/login">LOGIN</Link>
        </h1>
      </div>
    </div>
  );
};

export default Navbarr;
