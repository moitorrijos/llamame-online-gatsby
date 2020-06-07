import React, { useState } from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import Send from "../icons/send.svg"
import Sending from "../icons/refresh.svg"

const contact_mutation = gql`
  mutation CreateSubmissionMutation(
    $clientMutationId: String!
    $tuNombre: String!
    $tuCorreo: String!
    $tuTelefono: String!
    $tuMensaje: String!
  ) {
    createSubmission(
      input: {
        clientMutationId: $clientMutationId
        tuNombre: $tuNombre
        tuCorreo: $tuCorreo
        tuTelefono: $tuTelefono
        tuMensaje: $tuMensaje
      }
    ) {
      success
      data
    }
  }
`
const ContactForm = () => {
  const [tuNombre, setTuNombre] = useState("")
  const [tuCorreo, setTuCorreo] = useState("")
  const [tuTelefono, setTuTelefono] = useState("")
  const [tuSaludo, setTuSaludo] = useState("")
  const [tuMensaje, setTuMensaje] = useState("")
  return (
    <Mutation mutation={contact_mutation}>
      {(createSubmission, { loading, error, data }) => (
        <>
          <form
            onSubmit={async event => {
              try {
                event.preventDefault()
                createSubmission({
                  variables: {
                    clientMutationId: "prueba",
                    tuNombre,
                    tuCorreo,
                    tuTelefono,
                    tuSaludo,
                    tuMensaje,
                  },
                })
              } catch (error) {
                console.log(error)
              }
            }}
          >
            <label htmlFor="tuNombre">
              Tu Nombre <small className="required">necesario</small>
              <input
                type="text"
                name="tuNombre"
                onChange={event => {
                  setTuNombre(event.target.value)
                }}
                value={tuNombre}
                required="required"
              />
            </label>
            <label htmlFor="tuCorreo">
              Tu Correo Electrónico{" "}
              <small className="required">necesario</small>
              <input
                type="email"
                name="tuCorreo"
                onChange={event => {
                  setTuCorreo(event.target.value)
                }}
                value={tuCorreo}
                required="required"
              />
            </label>
            <label htmlFor="tuTelefono">
              Tu Número de Teléfono
              <input
                type="text"
                name="tuTelefono"
                onChange={event => {
                  setTuTelefono(event.target.value)
                }}
                value={tuTelefono}
              />
            </label>
            <label className="saludos" htmlFor="saludos">
              Saludos
              <input
                type="text"
                name="saludos"
                onChange={event => {
                  setTuSaludo(event.target.value)
                }}
                value={tuSaludo}
              />
            </label>
            <label htmlFor="tuMensaje">
              Tu Mensaje <small className="required">necesario</small>
              <textarea
                name="tuMensaje"
                required="required"
                onChange={event => {
                  setTuMensaje(event.target.value)
                }}
                value={tuMensaje}
              />
            </label>
            <button type="submit" className={loading ? "enviando" : ""}>
              {loading ? "Enviando" : "Enviar"}
              {loading ? <Sending /> : <Send />}
            </button>
          </form>
          {error && (
            <div className="wp-mensaje error">
              <p>
                Disculpa, ha ocurrido un error. Por favor, vuelve a intentarlo
                más tarde.
              </p>
            </div>
          )}
          {data && (
            <div className="wp-mensaje success">
              <p>
                Gracias por contactarnos. Te estaremos escribiendo muy pronto.
              </p>
            </div>
          )}
        </>
      )}
    </Mutation>
  )
}

export default ContactForm
