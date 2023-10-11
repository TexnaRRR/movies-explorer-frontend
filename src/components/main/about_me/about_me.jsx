import React from "react";
import "./about_me.css";
import SectionTitle from "../section-title/section-title";
import "./about_me.css";

function AboutMe() {
  return (
    <section className="about-me">
      <SectionTitle title={"Студент"}/>
      <div className="about-me__content">
        <div className="about-me__info">
          <div className="about-me__main-text">
            <h3 className="about-me__name">Александр</h3>
            <h4 className="about-me__job">Фронтенд-разработчик, 30 лет</h4>
            <p className="about-me__description about-me__description-position">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          </div>
          <a href="https://github.com/TexnaRRR" className="about-me__link hover-effect link-effect">Github</a>
        </div>
        <img src="https://img.freepik.com/free-photo/close-up-man-writing-code-on-the-laptop_158595-5169.jpg?w=1380&t=st=1696841487~exp=1696842087~hmac=09864d50a1ed0a6556cc16a909bfee74b21dbff58bcc58bc37af5907c33c5f80" alt="Фото разработчика" className="about-me__image"/>
      </div>
    </section>
  )
}

export default AboutMe;