import React from 'react';
import Footers from "../../Footers.json";
import "./Footer.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function Footer() {
  return (
    <div>
      <footer>
        <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <figure>
              <div className="itemfooter">
                {Footers && Footers.map((fot) => {
                  return <img src={fot.img} className="itemfooterunity" alt="Footer" key={fot.img}></img>
                })}
              </div>
            </figure>
        </a>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item"><a href="/#" className="nav-link px-2 text-muted">Inicio</a></li>
          <li className="nav-item"><a href="/#" className="nav-link px-2 text-muted">Vehiculos</a></li>
          <li className="nav-item"><a href="/#" className="nav-link px-2 text-muted">Nosotros</a></li>
          <li className="nav-item"><a href="/#" className="nav-link px-2 text-muted">Financiacion</a></li>
          <li className="nav-item"><a href="/#" className="nav-link px-2 text-muted">Contacto</a></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
