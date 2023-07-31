import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="nav navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to='/' >
            <img src="/data/Logo,sin,fondiu.png" alt="" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
