import React from "react"
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
          USD$34.50<small>/mes</small>
        </h2>
        <PrimaryButton color="primary">Selecciona este Plan</PrimaryButton>
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
          USD$74.50<small>/mes</small>
        </h2>
        <PrimaryButton color="primary">Selecciona este Plan</PrimaryButton>
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
          <li>y más</li>
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
