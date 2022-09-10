import React from 'react'

function Contacts() {
  return (
    <div>
      <div className="contacto">
<h3>NOS CONTACTAMOS CON   VOS:</h3>
    <form action="" id="Formulario">
        <label for="Nombre"></label>
        <p>Nombre:</p><input type="name" id="name"  className="contact_form"></input>
        <label for="email"></label>
        <p>Correo:</p><input type="email" id="email" className="contact_form"></input>
        <label for="number"></label>
        <p>Telefono</p><input type="number" id="number" className="contact_form"></input>
        <input type="submit" className="Formulario" value="ENVIAR"/>
    </form>
    </div>
    </div>
  )
}

export default Contacts
