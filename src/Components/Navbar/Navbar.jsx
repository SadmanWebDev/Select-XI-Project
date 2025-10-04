import "./Navbar.css";
import logoImg from "../../assets/logo.png";
import bannerMain from "../../assets/banner-main.png";
import React from "react";

const Navbar = ({ availableBalance }) => {
  return (
    <div className="max-w-[1260px] mx-auto mb-16">
      <div className="navbar">
        <div className="flex-1">
          <img className="w-16" src={logoImg} alt="" />
        </div>
        <div className="flex gap-2">
          <span className="font-semibold">{availableBalance}</span>
          <span>🪙</span>
        </div>
      </div>
      <div className="banner flex flex-col gap-5 mt-3">
        <img src={bannerMain} alt="" />
        <h1 className="font-bold text-2xl">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="font-light text-sm">Beyond Boundaries Beyond Limits</p>
        <button className="button">Claim Free Credit</button>
      </div>
    </div>
  );
};

export default Navbar;
