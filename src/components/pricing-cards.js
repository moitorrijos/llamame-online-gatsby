import React from "react"
import { Link } from "gatsby"
import PrimaryButton from "./primary-button"

const PricingCards = () => (
  <>
    <div className="pricing-cards" id="pricing-cards">
      <div className="pricing-card">
        <h3>Micro Central</h3>
        <ul>
          <li>Un Número de Teléfono Local* y dos llamadas simultáneas.</li>
          <li>Central Telefónica Virtual con 5 extensiones</li>
        </ul>
        <h2>
          <small>USD</small>$34.50<sub>/mes</sub>
        </h2>
        <PrimaryButton
          color="primary"
          linkTo={`${process.env.GATSBY_WP_URL}/finalizar-compra/?add-to-cart=9`}
        >
          Comprar
        </PrimaryButton>
      </div>
      <div className="pricing-card">
        <h3>Central Privada</h3>
        <ul>
          <li>Un Número de Teléfono Local* y 5 llamadas simultáneas.</li>
          <li>Central Telefónica Virtual con 25 extensiones</li>
          <li>Recepción Virtual con Menú de Voz</li>
          <li>Grabación de llamadas y servicios para Call Center</li>
        </ul>
        <h2>
          <small>USD</small>$74.50<sub>/mes</sub>
        </h2>
        <PrimaryButton
          color="primary"
          linkTo={`${process.env.GATSBY_WP_URL}/finalizar-compra/?add-to-cart=10`}
        >
          Comprar
        </PrimaryButton>
      </div>
      <div className="pricing-card">
        <h3>Plan Corporativo</h3>
        <ul>
          <li>
            Múltiples Números de Teléfonos Locales* y llamadas simultáneas
          </li>
          <li>Central Telefónica Virtual Privada</li>
          <li>Recepción Virtual con Menú de Voz</li>
          <li>Sistema de Videoconferencias personalizado</li>
          <li>Call Center Virtual incluyendo personal (agentes)</li>
          <li>y más</li>
        </ul>
        <Link className="primary conference-link" to="/contactanos">
          Contáctanos para precios
        </Link>
      </div>
    </div>
    <div className="asterisk">
      <p>
        * El número de teléfono puede ser en Panamá o en otros países,{" "}
        <Link to="/contactanos">contáctanos</Link> para conocer la lista de
        países disponibles.
      </p>
    </div>
  </>
)

export default PricingCards
