import React from "react";
import Pagos from  "../../Pagos.json";
import  "./Pago.css";

function Pago() {
  return (
    <div> 
      <section id="sect2">
        <div className="mediospago">
          <h4>MEDIOS DE PAGO</h4>
          <div className="itempay"> 
         {Pagos && Pagos.map((pay) => {  
            return <img src={pay.img} className="itempayunity" alt='img' key={pay.img}></img>
         })}
          </div>
        </div>
      </section> 
    </div>
  );
}

export default Pago;
