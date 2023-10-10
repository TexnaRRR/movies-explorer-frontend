import React from 'react';
import "./portfolio.css";
import portfolioLink from "../../../images/pointer_link.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a href="https://github.com/TexnaRRR/how-to-learn" target="_blank" className="portfolio__item-text hover-effect link-effect">
            <span>Статичный сайт</span>
          <img src={portfolioLink} alt="Ссылка" className="portfolio__link-image"/>
          </a>
          {/* <a href="https://github.cm/TexnaRRR/how-to-learn"  target="_blank" className="portfolio__link hover-effect link-effect">
            <img src={portfolioLink} alt="Ссылка" className="portfolio__link-image"/>
          </a> */}
        </li>
        <li className="portfolio__list-item">
          <a href="https://texnarrr.github.io/russian-travel/" target="_blank" className="portfolio__item-text hover-effect link-effect">
            <span>Адаптивный сайт</span>
          <img src={portfolioLink} alt="Ссылка" className="portfolio__link-image"/>
          </a>
          {/* <a href="https://texnarrr.github.io/russian-travel/" target="_blank" className="portfolio__link hover-effect link-effect">
            <img src={portfolioLink} alt="Ссылка" className="portfolio__link-image"/>
            </a> */}
        </li>
        <li className="portfolio__list-item">
          <a href="https://github.com/TexnaRRR/react-mesto-api-full-gha" target="_blank" className="portfolio__item-text hover-effect link-effect">
            <span>Одностраничное приложение</span>
          <img src={portfolioLink} alt="Ссылка" className="portfolio__link-image"/>
          </a>
          {/* <a href="https://github.com/TexnaRRR/react-mesto-api-full-gha" target="_blank" className="portfolio__link hover-effect link-effect">
            <img src={portfolioLink} alt="Ссылка" className="portfolio__link-image"/>
          </a> */}
        </li>
      </ul>
    </section>
)
}

export default Portfolio;