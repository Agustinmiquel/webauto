import React from "react";
import Headeres from "./Headeres.json";
import Search from "../Search/Search";
import "./Header.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function Header() {
  return (
    <div>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <nav className="navbar navbar-expand-lg">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <div className="itemheader container">
            {Headeres && Headeres.map((head) => {
              return <img src={head.img} className="itemheaderunity" alt="Slider" key={head.img}></img>
            })}
          </div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item"><a href="/#" className="nav-link text-white" aria-current="page">Inicio</a></li>
              <li className="nav-item"><a href="/#" className="nav-link text-white">Vehiculos</a></li>
              <li className="nav-item"><a href="/#" className="nav-link text-white">Nosotros</a></li>
              <li className="nav-item"><a href="/#" className="nav-link text-white">Financiacion</a></li>
              <Search></Search>
            </ul>
          </div>
        </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
