import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DesktopIcon from "../icons/llamame-online-desktop.svg"
import PrimaryButton from "../components/primary-button"
import VideoConference from "../icons/video.svg"
import PrincingCards from "../components/pricing-cards"
import AttentionIcon from "../icons/attention-small.svg"
import AppStoreIcon from "../icons/download-on-the-app-store-apple.svg"
import GooglePlayIcon from "../icons/google-play-badge.svg"
import LlamameOnlineApp from "../icons/llamame-online-app.svg"
import Hero from "../components/hero"

const IndexPage = () => (
  <>
    <SEO
      title="Llámame Online"
      description="Centrales Telefónicas y Videollamadas en la Nube"
      lang="es"
    />
    <Hero />
    <Layout>
      <PrincingCards />
      <div className="inner-container grid">
        <div className="icon desktop-image">
          <DesktopIcon />
        </div>
        <div className="inner-text desktop-text">
          <h2>Inicia una Videollamada</h2>
          <p>
            Puedes utilizar nuestro servicio de videollamada de forma gratuita,
            segura e ilimitada. Te recomendamos que la uses en Google Chrome
            para obtener los mejores resultados. Puedes invitar a todos los que
            quieras. No necesitas instalar nada si lo usas en tu computador
            personal.
          </p>
          <p className="attention">
            <AttentionIcon />
            <strong>Atención</strong> este servicio gratuito se brinda sin
            ninguna garantía. El usuario utiliza este servicio bajo su propio
            riesgo. La responsabilidad de proteger sus conferencias es
            únicamente del usuario.
          </p>
          <PrimaryButton
            color="primary"
            linkTo="https://hey.llamame.online/"
            style={{ fontSize: "0.8rem" }}
          >
            <VideoConference style={{ marginRight: 20 }} /> Inicia una
            VideoLLamada Gratuita
          </PrimaryButton>
        </div>
      </div>
      <div className="inner-container grid">
        <div className="inner-text">
          <h2>Baja la Aplicación</h2>
          <p>
            Para hacer videollamadas en tu móvil necesitarás descargar la
            aplicación Jitsi Meet, un software de videoconferencias gratuito y
            de código abierto. Descarga la aplicación para tu teléfono.
          </p>
          <div className="app-store">
            <a
              href="https://itunes.apple.com/us/app/jitsi-meet/id1165103905"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppStoreIcon />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=org.jitsi.meet&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GooglePlayIcon />
            </a>
          </div>
        </div>
        <div className="icon">
          <LlamameOnlineApp />
        </div>
      </div>
    </Layout>
  </>
)

export default IndexPage
