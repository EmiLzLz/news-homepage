import React from "react";
import '../public/components.css'

function Navbar() {
  return (
    <div className="container-fluid">
      <nav id="navbar" className="navbar navbar-expand-sm w-100 bg-transparent">
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            LOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link px-3 fw-bold" href="#">
                  Valoraciones
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 fw-bold" href="#">
                  Planes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 fw-bold" href="#">
                  Para empresas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
