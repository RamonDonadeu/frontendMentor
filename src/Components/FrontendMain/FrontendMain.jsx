import React from "react";
import "./FrontendMain.css";

const FrontendMain = () => {
  return (
    <section className="frontendMentor">
      <div className="container">
        <div className="frontendMentor--content">
          <h2>¿Qué és Frontend Mentor?</h2>
          <div className="frontendMentor--text">
            Frontend Mentor és una pagina web en la que se te ofrecen retos para
            mejorar tus habilidades Frontend. <br />
            Puedes seleccionar el ejercicio que te apetezca y te ofrecen unas
            imagenes con el diseño que debes conseguir, junto con los assets
            necesarios, imagenes, fuentes, logos, etc...
          </div>
          <button
            onClick={() => {
              window.open("https://www.frontendmentor.io");
            }}
          >
            Ir a Frontend Mentor
          </button>
        </div>
        <div className="frontendMentor--slides" id="js--slides">
          <div className="frontendMentor--slide active" id="1">
            <img
              src={require("../../assets/img/download.svg").default}
              alt=""
            />
            <h3>Elige tu reto</h3>
            <p>
              Echa un vistazo a la coleccion de diseños web. Elige el que te
              parezca un buen reto para tu nivel.
            </p>
          </div>
          <div className="frontendMentor--slide" id="2">
            <img src={require("../../assets/img/code.svg").default} alt="" />
            <h3>Crea el diseño</h3>
            <p>
              Empieza el reto y descarga los archivos. Te proporcionamos todos
              los archivos que necesitaras para completar el reto. Construirlo
              és cosa tuya.
            </p>
          </div>
          <div className="frontendMentor--slide" id="3">
            <img src={require("../../assets/img/share.svg").default} alt="" />
            <h3>Comparte tu solucion</h3>
            <p>
              Sube tu solucion a la plataforma para que todo el mundo pueda ver
              y recibe feedback de tu codigo de otros desarrolladores de la
              comunidad.
            </p>
          </div>
          <div className="frontendMentor--slide" id="4">
            <img src={require("../../assets/img/forum.svg").default} alt="" />
            <h3>Da feedback a otros</h3>
            <p>
              Tener pensamiento critico sobre el trabajo de otras personas es
              una habilidad crucial. Ayudales con tus conocimientos dandoles
              feedback a sus soluciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontendMain;
