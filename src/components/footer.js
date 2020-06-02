import React from "react"
import LogoFooter from "../icons/llamame-online-logo-footer.svg"
import LogoSr from "../icons/logo-sr.svg"
import MoiTorrijosLogo from "../icons/moitorrijos-logo.svg"

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="page-footer">
        <div className="servicio">
          <h3>Nuestro Servicio</h3>
          <div className="footer-column">
            <LogoFooter className="footer-logo" />
            <p>
              Llámame online es un sistema de comunicación unificada creada por
              ServidoresRapidos.net
            </p>
          </div>
        </div>
        <div className="quienes-somos">
          <h3>Quiénes Somos</h3>
          <div className="footer-column">
            <LogoSr />
            <p>
              <a
                href="https://servidoresrapidos.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                ServidoresRapidos.net
              </a>{" "}
              es una empresa de hospedaje de aplicaciones web y móviles
            </p>
          </div>
        </div>
        <div className="diseno-desarrollo-moitorrijos">
          <h3>Diseño y Desarrollo</h3>
          <div className="footer-column">
            <MoiTorrijosLogo />
            <p>
              <a
                href="https://moitorrijos.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Juan Moisés Torrijos
              </a>{" "}
              es diseñador y desarrollador de aplicaciones web y móviles
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="footer-inner-container">
        <p>
          Llámame Online es un servicio de
          {` `}
          <a
            href="https://servidoresrapidos.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            ServidoresRapidos.net
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
            MoiTorrijos.com
          </a>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
