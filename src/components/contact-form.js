import React from "react"
import Send from "../icons/send.svg"

const ContactForm = () => {
  const handleSubmit = event => {
    event.preventDefault()
    console.log("submitting...")
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="tu-nombre">
        Tu Nombre <small className="required">necesario</small>
        <input type="text" name="tu-nombre" required />
      </label>
      <label htmlFor="tu-correo">
        Tu Correo Electrónico <small className="required">necesario</small>
        <input type="email" name="tu-correo" required />
      </label>
      <label htmlFor="tu-telefono">
        Tu Número de Teléfono <small className="required">necesario</small>
        <input type="tel" name="tu-telefono" required />
      </label>
      <label htmlFor="tu-mensaje">
        Tu Mensaje <small className="required">necesario</small>
        <textarea name="tu-mensaje" required />
      </label>
      <button type="submit" className="enviar">
        Enviar <Send />
      </button>
    </form>
  )
}

export default ContactForm
