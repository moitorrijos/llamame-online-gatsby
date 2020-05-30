import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Layout from "../components/layout"
import roberto from "../assets/roberto-rubio-ceo.jpg"
import alex from "../assets/alex-neuman.jpg"
import isacio from "../assets/isacio-tamayo.jpg"

const QuienesSomos = () => (
  <>
    <SEO
      title="Quiénes Somos"
      description="ServidoresRapidos.net es una empresa de servicios en la nube"
    />
    <Header />
    <Layout>
      <div className="servidores-rapidos">
        <h2>
          <a
            href="https://servidoresrapidos.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            ServidoresRapidos.net
          </a>
        </h2>
        <p className="big">
          Somos una empresa que ofrece servicios en la nube, desde alojamiento
          de sitios web, hasta servidores privados y mucho más.
        </p>
        <p className="big">
          Somos un equipo con más de 20 años de experiencia en la industria de
          servidores.
        </p>
        <p className="big">
          Somos una empresa fundada en Panamá para servir al mundo.
        </p>
      </div>
      <h2 className="centered">Nuestro Equipo</h2>
      <div className="equipo">
        <div className="miembro">
          <img src={roberto} alt="Roberto Rubio" />
          <h3>Roberto Rubio</h3>
          <h4>Fundador y Presidente</h4>
          <p>
            Especialista en Servidores (Ops y DevOps), maestro sin diploma y
            seminómada.
          </p>
        </div>
        <div className="miembro">
          <img src={alex} alt="Alex Neuman" />
          <h3>Alex Neuman</h3>
          <h4>Consultor de Tecnología</h4>
          <p>
            Arquitecto de Soluciones en la nube, locutor, y estrella de la TV
            Panameña.
          </p>
        </div>
        <div className="miembro">
          <img src={isacio} alt="Isacio Tamayo" />
          <h3>Isacio Tamayo</h3>
          <h4>Especialista Técnico</h4>
          <p>Monitoreo, Operaciones y Soporte. Estudiante.</p>
        </div>
      </div>
    </Layout>
  </>
)

export default QuienesSomos
