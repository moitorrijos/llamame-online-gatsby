import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Telefono from "../icons/telefono-nube.svg"
import Central from "../icons/central-nube.svg"
import Transferencia from "../icons/transfiere-inicio.svg"

const IndexPage = () => (
  <>
    <SEO
      title="Llámame Online"
      description="Centrales Telefónicas y Videollamadas en la Nube"
    />
    <Hero />
    <Layout>
      <h2 className="centered">
        Centrales Telefónicas para la era del Teletrabajo
      </h2>
      <h3 className="centered max-width">
        Adquiere tu números de teléfono fijos de Panamá u otras ciudades del
        mundo y gestiona tus llamadas desde la nube.
      </h3>
      <div className="como-funciona-inicio auto-grid">
        <div className="telefono-nube">
          <Telefono />
          <p>
            Adquiere uno o varios números de teléfono y recibe llamadas en tu
            computadora personal, tu teléfono tradicional de escritorio o
            teléfono inteligente.
          </p>
        </div>
        <div className="central-nube">
          <Central />
          <p>
            Convierte tu computadora personal o teléfono inteligente en tu
            extensión en la central telefónica de tu empresa con nuestro
            servicio en la nube.
          </p>
        </div>
        <div className="transferencias">
          <Transferencia />
          <p>
            Transfiere llamadas a tus colaboradores muy fácilmente aunque no
            estén en el mismo lugar físicamente.
          </p>
        </div>
      </div>
    </Layout>
  </>
)

export default IndexPage
