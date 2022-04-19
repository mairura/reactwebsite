import React from "react";
import "./portifolio.css";
import IMG1 from "../../assests/IMG1.webp";
import IMG2 from "../../assests/IMG2.webp";
import IMG3 from "../../assests/IMG3.webp";
import IMG4 from "../../assests/IMG4.webp";
import IMG5 from "../../assests/IMG5.webp";
import IMG6 from "../../assests/IMG6.webp";

const Portifolio = () => {
  return (
    <section id="portifolio">
      <h5>My Recent Work</h5>
      <h2>Portifolio</h2>

      <div className="container portifolio__container">
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={IMG1} alt=""></img>
          </div>
          <h3>This is a portifolio item title</h3>
          <div className="portifolio__item-cta">
            <a href="https://www.github.mairura" className="btn">
              Github
            </a>
            <a href="https://www.dribble.mairura" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={IMG2} alt=""></img>
          </div>
          <h3>This is a portifolio item title</h3>
          <div className="portifolio__item-cta">
            <a href="https://www.github.mairura" className="btn">
              Github
            </a>
            <a href="https://www.dribble.mairura" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={IMG3} alt=""></img>
          </div>
          <h3>This is a portifolio item title</h3>
          <div className="portifolio__item-cta">
            <a href="https://www.github.mairura" className="btn">
              Github
            </a>
            <a href="https://www.dribble.mairura" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={IMG4} alt=""></img>
          </div>
          <h3>This is a portifolio item title</h3>
          <div className="portifolio__item-cta">
            <a href="https://www.github.mairura" className="btn">
              Github
            </a>
            <a href="https://www.dribble.mairura" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={IMG5} alt=""></img>
          </div>
          <h3>This is a portifolio item title</h3>
          <div className="portifolio__item-cta">
            <a href="https://www.github.mairura" className="btn">
              Github
            </a>
            <a href="https://www.dribble.mairura" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={IMG6} alt=""></img>
          </div>
          <h3>This is a portifolio item title</h3>
          <div className="portifolio__item-cta">
            <a href="https://www.github.mairura" className="btn">
              Github
            </a>
            <a href="https://www.dribble.mairura" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Portifolio;
