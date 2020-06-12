import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Layout from "../components/layout"
import Paso1 from "../icons/como-funciona-1.svg"
import Paso2 from "../icons/como-funciona-2.svg"
import Paso3 from "../icons/como-funciona-3.svg"
import Buttons from "../components/buttons"

const ComoFunciona = () => {
  return (
    <>
      <SEO
        title="Llámame Online"
        description="Cómo Funciona tu Central en la Nube"
      />
      <Header />
      <Layout>
        <h2 className="centered">Cómo Funciona tu Central en la Nube</h2>
        <div className="como-funciona inner-container">
          <div className="pasos pasos-imagen paso-imagen-1">
            <Paso1 />
          </div>
          <div className="pasos paso-1">
            <p>
              Recibe llamadas hechas de teléfonos fijos o móviles a un número de
              teléfono local, internacional o incluso de varios países. Puedes
              adquirir un nuevo número o pasar tu número existente por
              portabilidad numérica.
            </p>
          </div>
          <div className="pasos paso-2">
            <p>
              Redirige llamadas desde una central telefónica en la nube, la cual
              puedes administrar desde tu computadora personal o tu teléfono
              inteligente. Puedes transferir llamadas a tus colaboradores aunque
              no estén en el mismo edificio, ciudad… !o país!.
            </p>
          </div>
          <div className="pasos pasos-imagen paso-imagen-2">
            <Paso2 />
          </div>
          <div className="pasos pasos-imagen paso-imagen-3">
            <Paso3 />
          </div>
          <div className="pasos paso-3">
            <p>
              Crea una recepción virtual con contestadora y
              auto-redireccionamiento de llamadas basadas en extensiones, aunque
              tus colaboradores no se encuentren en el mismo edificio. Tu
              contestadora puede estar en varios idiomas dependiendo del país de
              donde se reciba la llamada.
            </p>
          </div>
        </div>
        <Buttons />
      </Layout>
    </>
  )
}

export default ComoFunciona
