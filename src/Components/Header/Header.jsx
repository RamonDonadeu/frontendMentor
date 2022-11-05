import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header--content">
        <div className="logo">
          <img
            src={require("../../assets/img/fontendMentorIcon.svg").default}
            alt="Frontend Mentor Logo"
          />
        </div>
        <nav>
          <div className="headerElem">
            <a href="#frontendMentor">Frontend Mentor</a>
          </div>
          <div className="headerElem">
            <a href="#myProjects">Mis proyectos</a>
          </div>
          <div className="headerElem">Mi Portfolio</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
