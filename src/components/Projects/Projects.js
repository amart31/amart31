import React from "react";
import "./Projects.scss";

export function Projects(props) {
  return (
    <section className="Project container" id="projects">
          <div
        className={`${
          props.side % 2 === 0 ? "right" : "left"
        }-side Project-desc`}
      >
        <h2>{props.title}</h2>
        <p>{props.text}</p>



        <a
        target="_blank"
        title="link to projects github repository"
        rel="noopener noreferrer"
        className="button"
        href={props.link}>
       {props.btnTxt}
      </a>



        
       
      </div>
      <div
        className={`${
          props.side % 2 === 0 ? "left" : "right"
        }-side Project-img`}
      >
        <picture>
          <source media="(min-width: 768px)" srcSet={props.imgSrc} />
          <img src={props.imgSrcM} alt={props.imgAlt} />
        </picture>
      </div>
    </section>
  );
}
