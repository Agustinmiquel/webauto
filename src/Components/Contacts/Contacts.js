import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const endpoint = 'https://backend-mundose-api.herokuapp.com/api/Contacto'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [cmessage, setCmessage] = useState('')
  // const navigate = useNavigate()

  const store = async (e) => {
    e.preventDefault()
    await axios.post(endpoint, { name: name, email: email, phone: phone, cmessage: cmessage })
    const MySwal = withReactContent(Swal)

    MySwal.fire({
      title: <h2>Su Mensaje a sido Enviado</h2>,
      width: 600,
      timer: 2000,
      timerProgressBar: true,
      padding: '3em',
      icon: 'success',
      confirmButtonColor: 'blue',
      backdrop: `rgba(0,158,255,0.39)
                left top
                filter:blur(2px)
                  `,
    })

    setName('');
    setEmail('');
    setPhone('');
    setCmessage('');
  }

  return (
    <div>
      <div>
        <div className="contacto" id='contacto'>
          <h3>NOS CONTACTAMOS CON   VOS:</h3>
          <form className="needs-validation" id="contactForm" onSubmit={store}>

            <div className="col-md-5">
              <label className="form-label" htmlFor="name">Nombre</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="name" type="text"
                placeholder="Nombre"
                required
              />
            </div>

            <div className="col-md-5">
              <label className="form-label" htmlFor="emailAddress">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="emailAddress"
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="col-md-5">
              <label className="form-label" htmlFor="phone">Telefono</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                id="phone"
                type="tel"
                placeholder="Telefono"
                required
              />
            </div>

            <div className="col-md-5">
              <label className="form-label" htmlFor="cmessage">Mensaje</label>
              <textarea
                value={cmessage}
                onChange={(e) => setCmessage(e.target.value)}
                className="form-control"
                id="cmessage"
                type="text"
                placeholder="Mensaje"
                required
              ></textarea>
            </div>

            <div className="d-grid">
              <button className="btn btn-lg Formulario" type="submit">Enviar</button>
            </div>

          </form>
          <details>
            <summary>INFORMACION ADICIONAL</summary>
            <div>
              <p>Dentro de las 24 horas de haber confirmado el formulario en su casilla de correo, un operador  se contactara con usted en los horarios disponibles.</p>
              <p>De no ser asi, le pedimos que recibe el spam para verificar la solicitud.</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  )
}

export default Contact
