import React from "react";

function Header() {
  return (
    <div>
      <header>
        <img src="logo.png" height="90p" alt="auto" />
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
          <a href="/" className="Financiacion">Name
            Financiacion
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
