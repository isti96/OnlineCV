import { AppLogo } from "./AppLogo";
import "./Header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="app-header">
      <AppLogo />
      <Link to="/" style={{ textDecoration: "none" }}>
        <p className="header-links"> Home </p>
      </Link>
      <Link to="/aboutme" style={{ textDecoration: "none" }}>
        <p className="header-links"> About me </p>
      </Link>
      <p className="header-links"> Education </p>
      <p className="header-links"> Skills </p>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <p className="header-links"> Contact </p>
      </Link>
    </div>
  );
}
