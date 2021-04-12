import React from "react";
import beemur from "../images/beemur-logo.png";

const Nav = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="row justify-content-center">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand text-white py-2" href="/#">
              <img src={beemur} alt="logo" className="img-fluid" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Nav;
