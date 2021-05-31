import { AppLogo } from "./AppLogo";
import "./Header.css";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./AppLogo.css";

export function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <div className={click ? "app-header-click" : "app-header"}>
      <AppLogo className="app-logo" />
      <NavLink
        className={click ? "nav-button-none" : "nav-button"}
        to="/home"
        onClick={closeMobileMenu}
      >
        <p className="header-links"> Home </p>
      </NavLink>
      <NavLink
        className={click ? "nav-button-none" : "nav-button"}
        to="/aboutme"
        onClick={closeMobileMenu}
      >
        <p className="header-links"> About me </p>
      </NavLink>
      <NavLink
        className={click ? "nav-button-none" : "nav-button"}
        to="/educationexp"
        onClick={closeMobileMenu}
      >
        <p className="header-links"> Education/Experience </p>
      </NavLink>
      <NavLink
        className={click ? "nav-button-none" : "nav-button"}
        to="/skills"
        onClick={closeMobileMenu}
      >
        <p className="header-links"> Skills </p>
      </NavLink>
      <NavLink
        className={click ? "nav-button-none" : "nav-button"}
        to="/contact"
        onClick={closeMobileMenu}
      >
        <p className="header-links"> Contact </p>
      </NavLink>
      <a class="icon" onClick={handleClick}>
        <i class="fa fa-bars"></i>
      </a>
    </div>
  );
}
