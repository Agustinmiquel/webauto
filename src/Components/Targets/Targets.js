import React from 'react';
import Tarjetasu from "../../Tarjetasu.json";
import Targetado from "../../Targetado.json";
import Targetatre from "../../Targetatre.json";
import "./Targets.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function Targets() {
  return (
    <div className="Tarjetas">
      <div className="content">
        <figure>
          <div className="itemtarjetau">
            {Tarjetasu && Tarjetasu.map((tar1) => {
              return <img src={tar1.img} className="itemtar1unity" alt='img' key={tar1.img}></img>
            })}
          </div>
        </figure>
        <div className="contenido">
          <h3>FORD FIESTA</h3>
          <p>Modelo 2017 en perfecto estado, sus capacidades sonn excelentes para el uso en la ciudad. Ya que posee un motor 1.9 util tambien para viajes de  larga distancia....</p>
          <a href="/" className='btn btn-outline-info'>LEER MÁS</a>
        </div>
      </div>
      <div className="content">
        <figure>
          <div className="itemtarjetado">
            {Targetado && Targetado.map((tar2) => {
              return <img src={tar2.img} className="btn btn-outline-info" alt='img' key={tar2.img}></img>
            })}
          </div>
        </figure>
        <div className="contenido">
          <h3>CHEVROLET CORSA</h3>
          <p>El Chevrolet Corsa, es un automóvil de turismo del segmento B, que fue producido en Argentina, Brasil y México para América Latina por el fabricante norteamericano General Motors....</p>
          <a href="/#" className='btn btn-outline-info'>LEER MÁS</a>
        </div>
      </div>
      <div className="content">
        <figure>
          <div className="itemtarjetatre">
            {Targetatre && Targetatre.map((tar3) => {
              return <img src={tar3.img} className="itemtar3unity" alt='img' key={tar3.img}></img>
            })}
          </div>
        </figure>
        <div className="contenido">
          <h3>AMAROK</h3>
          <p>La Volkswagen Amarok es una camioneta pick-up de tamaño mediano fabricada por Volkswagen. posee un motor delantero longitudinal y tracción trasera, o tracción en las cuatro ruedas 4Motion....</p>
          <a href="/" className='btn btn-outline-info'>LEER MÁS</a>
        </div>
      </div>
    </div>
  )
}

export default Targets