import React from 'react'
import Tarjetasu from  "../../Tarjetasu.json";
import Targetado from  "../../Targetado.json";
import Targetatre from  "../../Targetatre.json";
import  "./Targets.css"

function Targets() {
  return (
    <div>
      <div class="Tarjetas">
    <div class="content">
        <figure>
        <div className="itemtarjetau"> 
         {Tarjetasu && Tarjetasu.map((tar1) => {  
            return <img src={tar1.img} className="itemtar1unity"/>
         })}
          </div>
        </figure>
        <div class="contenido">
            <h3>FORD FIESTA</h3>
            <p>Modelo 2017 en perfecto estado, sus capacidades sonn excelentes para el uso en la ciudad. Ya que posee un motor 1.9 util tambien para viajes de  larga distancia....</p>
            <a href="#">LEER MÁS</a>
        </div> 
    </div>
    <div class="content">
        <figure>
        <div className="itemtarjetado"> 
         {Targetado && Targetado.map((tar2) => {  
            return <img src={tar2.img} className="itemtar2unity"/>
         })}
          </div>
        </figure>
        <div class="contenido">
            <h3>CHEVROLET CORSA</h3>
            <p>El Chevrolet Corsa, es un automóvil de turismo del segmento B, que fue producido en Argentina, Brasil y México para América Latina por el fabricante norteamericano General Motors....</p>
            <a href="#">LEER MÁS</a>
        </div> 
    </div>
    <div class="content">
        <figure>
        <div className="itemtarjetatre"> 
         {Targetatre && Targetatre.map((tar3) => {  
            return <img src={tar3.img} className="itemtar3unity"/>
         })}
         </div> 
        </figure>
        <div class="contenido">
            <h3>AMAROK</h3>
            <p>La Volkswagen Amarok es una camioneta pick-up de tamaño mediano fabricada por Volkswagen. posee un motor delantero longitudinal y tracción trasera, o tracción en las cuatro ruedas 4Motion....</p>
            <a href="#">LEER MÁS</a>
        </div> 
    </div>
</div>

    </div>
  )
}

export default Targets
