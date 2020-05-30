import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Layout from "../components/layout"
import Contactanos from "../icons/llamame-online-contactanos.svg"

const ContactPage = () => (
  <>
    <SEO
      title="Llámame Online"
      description="Contáctanos para más información"
    />
    <Header />
    <Layout>
      <h2>Contáctanos</h2>
      <div className="auto-grid">
        <div className="contact-text">
          <p className="big">
            Si necesitas soporte inmediato escríbenos a{" "}
            <a href="mailto:soporte@llamame.online" className="email">
              soporte@llamame.online
            </a>{" "}
            o escríbenos al nuestro chat en vivo (horario de Lunes a Viernes de
            8:00am a 5:00pm)
          </p>
          <p className="big">
            Llena el formulario y te contactaremos muy pronto
          </p>
        </div>
        <div className="contact-image">
          <Contactanos />
        </div>
      </div>
    </Layout>
  </>
)

export default ContactPage
