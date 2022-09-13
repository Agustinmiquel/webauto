import React from 'react';

function Descuento() {
  return (
    <div className="banner1">
      <h1 className="promocion">30% DE DESCUENTO CON ENTREGA DE USADO</h1>
      {/* <a href="/#" className="button1">Conoce Más</a> */}

      <details>
        <summary>CONDICIONES</summary>
        <div>
          <p>El cupón es valido unicamente para los autos que se encuentran en promocion. Cuotas sin interes solo con Visa o Mastercard</p>
        </div>
      </details>
    </div>
  )
}

export default Descuento
