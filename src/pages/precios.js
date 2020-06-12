import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Layout from "../components/layout"
import PricingCards from "../components/pricing-cards"
import Buttons from "../components/buttons"

const Precios = () => (
  <>
    <SEO
      title="LLámame Online Precios"
      description="Lista de Precios de Nuestros Servicios"
    />
    <Header />
    <Layout>
      <h2 className="centered">Nuestros Planes</h2>
      <p className="centered">
        Recibe llamadas de teléfonos fijos y móviles a una central en la nube,
        la cual puedes administrar en tu computadora o celular. Redirige
        llamadas a colaboradores de tu empresa, aunque no estén físicamente
        contigo. Crea una recepción virtual con redireccionamiento de llamadas,
        y mucho más.
      </p>
      <PricingCards />
      <Buttons />
    </Layout>
  </>
)

export default Precios
