import React from "react"
import Logo from "../icons/llamame-online-logo.svg"
import Attention from "../icons/atention.svg"
import "../styles/_footer.sass"

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="inner-container page-footer">
        <div className="servicio">
          <Logo className="footer-logo" />
          <p>
            Llámame online es una plataforma rápida, segura y completamente
            gratuita para crear conferencias online. Es un servicio de
            Servidores Rápidos, S. A.
          </p>
        </div>
        <div className="atencion">
          <h3>
            <Attention className="attention" />
            Atención
          </h3>
          <p>
            Este servicio está en periodo de prueba y se brinda sin ninguna
            garantía. El usuario utiliza este servicio bajo su propio riesgo. La
            responsabilidad de proteger sus conferencias es únicamente del
            usuario.
          </p>
        </div>
        <div className="quienes-somos">
          <h3>Quiénes Somos</h3>
          <p>
            <a
              href="https://servidoresrapidos.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Servidores Rápidos
            </a>{" "}
            es una empresa de hospedaje de aplicaciones web y móviles
          </p>
          <p>
            <a
              href="https://moitorrijos.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Moi Torrijos
            </a>{" "}
            es diseñador y desarrollador de aplicaciones web y móviles
          </p>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="inner-container">
        <p>
          Llámame Online es un servicio de
          {` `}
          <a
            href="https://servidoresrapidos.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            Servidores Rápidos, S. A.
          </a>
          {` `}
          Todos los derechos reservados © {new Date().getFullYear()}. Diseñado y
          Desarrollado por
          {` `}
          <a
            href="https://moitorrijos.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Moi Torrijos.
          </a>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
