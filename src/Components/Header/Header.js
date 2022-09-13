import React from "react";
import Headeres from  "../../Headeres.json";
import  "./Header.css"

function Header() {
  return (
    <div>
      <header>
      <div className="itemheader"> 
         {Headeres && Headeres.map((head) => {
            return <img src={head.img} className="itemheaderunity" alt="Header"/>
         })}
          </div>
        <h1 className="FERRO AUTOMOTORES">FERRO AUTOMOTORES</h1>
        <nav>
          <a href="/" className="Inicio">
            Inicio
          </a>
          <a href="/" className="Vehiculos">
            Vehiculos
          </a>
          <a href="/" className="Sobre nosotros">
            Sobre Nosotros
          </a>
          <a href="/" className="Financiacion">
            Financiacion
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
