import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DesktopIcon from "../icons/llamame-online-desktop.svg"
import PrimaryButton from "../components/primary-button"
import VideoConference from "../icons/video.svg"
import PrincingCards from "../components/pricing-cards"
import AppStoreIcon from "../icons/download-on-the-app-store-apple.svg"
import GooglePlayIcon from "../icons/google-play-badge.svg"
import LlamameOnlineApp from "../icons/llamame-online-app.svg"
import Header from "../components/header"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Layout>
        <SEO
          title="Llámame Online"
          description="Centrales Telefónicas y Videollamadas en la Nube"
          lang="es"
        />
        <PrincingCards />
        <div className="inner-container grid">
          <div className="icon desktop-image">
            <DesktopIcon />
          </div>
          <div className="inner-text desktop-text">
            <h2>Inicia una Videllamada</h2>
            <p>
              Puedes utilizar nuestro servicio de videollamada de forma
              gratuita, segura e ilimitada. Te recomendamos que la uses en
              Google Chrome para obtener los mejores resultados. Puedes invitar
              a todos los que quieras. No necesitas instalar nada si lo usas en
              tu computador personal.
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
              Llámame utiliza Jitsi Meet, un software de videoconferencias de
              fuente abierta. Descarga la aplicación para tu teléfono. En tu
              computadora sólo necesitas un buen navegador.
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
}

export default IndexPage
