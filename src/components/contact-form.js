import React from "react"
import { useFormik } from "formik"
import Send from "../icons/send.svg"
import Sending from "../icons/refresh.svg"
const ContactForm = () => {
  async function wait(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    })
  }
  const formik = useFormik({
    initialValues: {
      tuNombre: "",
      tuCorreo: "",
      tuTelefono: "",
      tuMensaje: "",
      saludos: "",
    },
    onSubmit: async values => {
      try {
        if (values.saludos !== "") {
          console.log("Error")
          return
        }
        const response = await wait(2000)
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="tuNombre">
        Tu Nombre <small className="required">necesario</small>
        <input
          type="text"
          name="tuNombre"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.tuNombre}
          required="required"
        />
      </label>
      <label htmlFor="tuCorreo">
        Tu Correo Electrónico <small className="required">necesario</small>
        <input
          type="email"
          name="tuCorreo"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.tuCorreo}
          required="required"
        />
      </label>
      <label htmlFor="tuTelefono">
        Tu Número de Teléfono
        <input
          type="text"
          name="tuTelefono"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.tuTelefono}
        />
      </label>
      <label className="saludos" htmlFor="saludos">
        Saludos
        <input
          type="text"
          name="saludos"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.saludos}
        />
      </label>
      <label htmlFor="tuMensaje">
        Tu Mensaje <small className="required">necesario</small>
        <textarea
          name="tuMensaje"
          required="required"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.tuMensaje}
        />
      </label>
      <button type="submit" className={formik.isSubmitting ? "enviando" : ""}>
        {formik.isSubmitting ? "Enviando" : "Enviar"}
        {formik.isSubmitting ? <Sending /> : <Send />}
      </button>
    </form>
  )
}

export default ContactForm
