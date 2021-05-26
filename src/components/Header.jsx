import { AppLogo } from "./AppLogo";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { Component } from "react";
import React, { useState } from "react";

export function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="app-header">
      <AppLogo />
      <NavLink
        activeStyle={{
          borderBottom: "3px solid black",
          fontFamily: "Audiowide , sans-serif"
        }}
        className="nav-button"
        to="/home"
        style={{ textDecoration: "none" }}
      >
        <p className="header-links"> Home </p>
      </NavLink>
      <NavLink
        activeStyle={{
          borderBottom: "3px solid black",
          fontFamily: "Audiowide , sans-serif"
        }}
        className="nav-button"
        to="/aboutme"
        style={{ textDecoration: "none" }}
      >
        <p className="header-links"> About me </p>
      </NavLink>
      <NavLink
      activeStyle={{
        borderBottom: "3px solid black",
        fontFamily: "Audiowide , sans-serif"
      }}
        className="nav-button"
        to="/educationexp"
        style={{ textDecoration: "none" }}
      >
        <p className="header-links"> Education/Experience </p>
      </NavLink>
      <NavLink 
      className="nav-button"
      activeStyle={{
        borderBottom: "3px solid black",
        fontFamily: "Audiowide , sans-serif"
      }}
      to="/skills" style={{ textDecoration: "none" }}>
        <p className="header-links"> Skills </p>
      </NavLink>
      <NavLink 
      className="nav-button"
      activeStyle={{
        borderBottom: "3px solid black",
        fontFamily: "Audiowide , sans-serif"
      }}
      to="/contact" style={{ textDecoration: "none" }}>
        <p className="header-links"> Contact </p>
      </NavLink>
    </div>
  );
}
