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
<<<<<<< HEAD
      <footer className="piedepagina d-flex-footer flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">© 2022 <b>Ferro Automotores</b>  - Todos los derechos reservados</p>
=======
      <footer className="piedepagina">
    <div className="grupo1">
        <div className="box">
            <figure>
            <div className="itemfooter"> 
         {Footers && Footers.map((fot) => {
            return <img src={fot.img} className="itemfooterunity" alt="Footer"></img>
         })}
          </div>
            </figure>
        </div>
        <div className="box">
            <h2>SOBRE NOSOTROS</h2>
            <p>Ferro automotores nacio en el año 2022 de la mano del grupo de programadores Agustin, Fransisco y Hans.</p>
            <p>La empresa se dedica a la compra y venta de autos usados priorizando siempre la facilidad de pago para cliente.</p>
            <p>Trabajando con las mejores marcas.</p>
        </div>
        {/* <div class="box">
            <h2>SIGUENOS</h2>
            <div class="Redessociales">
            <a href="/" className="icon-instagram"></a>
            <a href="/" className="icon-facebook"></a>
            <a href="/" className="icon-youtube"></a>
        </div>
    <br/> */}
</div>
>>>>>>> 071b827f2460752d9f319a37ce4573145c3c94e7

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
