import React, { useEffect, useState } from "react";
import "./FrontendProjects.css";

const FrontendProjects = () => {
  const [projectList, setProjectList] = useState([]);
  const projectsPaths = ["./works/news-homepage/"];

  function difficulty(dif) {
    if (dif === 1) {
      return (
        <div className="difficultyContainer diff1">
          <div className="difNum">1</div>
          <div className="difText">NEWBIE</div>
        </div>
      );
    }
    if (dif === 2) {
      return (
        <div className="difficultyContainer diff2">
          <div className="difNum">2</div>
          <div className="difText">JUNIOR</div>
        </div>
      );
    }
    if (dif === 3) {
      return (
        <div className="difficultyContainer diff3">
          <div className="difNum">3</div>
          <div className="difText">INTERMEDIATE</div>
        </div>
      );
    }
    if (dif === 4) {
      return (
        <div className="difficultyContainer diff4">
          <div className="difNum">4</div>
          <div className="difText">ADVANCED</div>
        </div>
      );
    }
  }

  useEffect(() => {
    const list = [];
    let counter = 0;
    projectsPaths.forEach((project) => {
      const data = require(project + "data.json");
      console.log(data);
      list.push(
        <div className="project" key={counter}>
          <div className="project--imgContainer">
            <img
              src={require("./works/news-homepage/desktop-preview.png")}
              alt="Project Image"
            />
            <div className="project--hover">
              <a href={data.codeLink} className="gitlink">
                See Github
              </a>
              <a href={data.resultLink} className="pagelink">
                See Result
              </a>
            </div>
          </div>
          <div className="project--content">
            <div className="project--title">{data.projectname}</div>
            <div className="project--info">
              <div className="info--stack">
                {data.css ? <div className="infoCss">CSS</div> : null}
                {data.html ? <div className="infoHtml">HTML</div> : null}
                {data.js ? <div className="infoJs"></div> : null}
              </div>
              <div className="info--level">{difficulty(data.difNum)}</div>
            </div>
          </div>
        </div>
      );
      counter = counter + 1;
    });
    setProjectList(list);
  }, []);

  return (
    <section className="myprojects">
      <div className="container">
        <div className="myProjects--title">
          <a href="#myProjects">
            <h1>Mis proyectos en Frontend Mentor</h1>
            <img src={require("../../assets/img/down.svg").default} alt="" />
          </a>
        </div>
        <div className="myProjects--content" id="myProjects">
          {projectList}
        </div>
      </div>
    </section>
  );
};

export default FrontendProjects;
