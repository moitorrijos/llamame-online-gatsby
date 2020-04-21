import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DesktopIcon from "../icons/llamame-online-desktop.svg"
import VideoConference from "../components/video-conference"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Inicio"
      description="Plataforma de Video Conferencias"
      lang="es"
    />
    <div className="main-container grid">
      <div className="icon">
        <DesktopIcon />
      </div>
      <div className="inner-text">
        <h2>Inicia una Conferencia</h2>
        <p>
          Puedes proteger tus conferencias con contraseña de acceso, compartir
          videos, compartir tu pantalla, chatear durante la conferencia y mucho
          más.
        </p>
        <VideoConference color="primary" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
