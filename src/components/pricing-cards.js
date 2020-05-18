import React from "react"
import PrimaryButton from "./primary-button"
import "../styles/_pricing-cards.sass"

const PricingCards = () => (
  <>
    <div className="pricing-cards" id="pricing-cards">
      <div className="pricing-card">
        <h3>Micro Central</h3>
        <ul>
          <li>Un Número de Teléfono Local*</li>
          <li>Central Telefónica Virtual</li>
        </ul>
        <h2>
          USD$75.00 <small>/mes</small>
        </h2>
        <PrimaryButton color="primary">Selecciona este Plan</PrimaryButton>
      </div>
      <div className="pricing-card">
        <h3>Central Privada</h3>
        <ul>
          <li>X Números de Teléfonos Locales*</li>
          <li>Central Telefónica Virtual</li>
          <li>Recepción Grabada con Extensiontes</li>
          <li>Líneas Separadas por Departamento</li>
        </ul>
        <h2>
          USD$150 <small>/mes</small>
        </h2>
        <PrimaryButton color="primary">Selecciona este Plan</PrimaryButton>
      </div>
      <div className="pricing-card">
        <h3>Plan Corporativo</h3>
        <ul>
          <li>Y Números de Teléfonos Locales*</li>
          <li>Central Telefónica Virtual</li>
          <li>Recepción Grabada con Extensiones</li>
          <li>Líneas Separadas por Departamento</li>
          <li>Sistema de Videoconferencias personalizado</li>
        </ul>
        <PrimaryButton color="primary">Contáctanos para precios</PrimaryButton>
      </div>
    </div>
    <div className="asterisk">
      <p>
        * El número de teléfono puede ser en Panamá o en otros países,
        contáctanos para conocer la lista de países disponibles.
      </p>
    </div>
  </>
)

export default PricingCards
