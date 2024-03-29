/* eslint-disable max-len */
import React from 'react';
import logo from '../../images/svg/calendar_logo.svg';
import CardAboutUs from '../CardAboutUs/CardAboutUs';

import './AboutUs.scss';

function AboutUs() {
  return (
    <div className="main">
      <section className="about page__section">
        <h3 className="chapter-title about__title">
          Наставники.про – цифровая информационная платформа организации «Старшие
          Братья Старшие Сестры». Созданная для поддержки наставников программы.

        </h3>
        <img src={logo} alt="Логотип наставники.про" className="about__logo" />

        <div className="about__us">
          <div className="card card_color_yellow about__circle">
            <h2 className="section-title">
              Об организации
            </h2>
          </div>
          <article className="card card_content_annotation about__caption">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph about__main-text">
                  «Старшие Братья Старшие Сестры» — межрегиональная общественная
                  организация содействия воспитанию подрастающего поколения. Мы поддерживаем детей, которым требуется
                  внимание: оставшихся без попечения родителей, приемных, детей из неполных, многодетных или
                  неблагополучных семей, детей с ограниченными возможностями.
                </p>
                <p className="paragraph about__main-text">
                  Любому человеку, тем более ребенку, необходимо общение. Без него
                  дети растут неуверенными и замкнутыми. Одиночество токсично, а самое надежное противоядие – дружба.
                </p>
                <p className="paragraph about__main-text">
                  Мы помогаем детям, которым не хватает поддержки взрослого друга,
                  «Младшим». Таким другом становится наш волонтер, «Старший». Он принимает ребенка, какой он есть,
                  поддерживает, помогает раскрыть потенциал, почувствовать уверенность в своих силах, узнать элементарные
                  вещи о жизни, адаптироваться и полноценно участвовать в жизни общества.
                </p>
              </div>
            </div>
          </article>
        </div>

        <blockquote className="about__quote">
          <h3 className="chapter-title about__quote-text">
            Мы хотим, чтобы наставник был у каждого ребенка, который в нем
            нуждается
          </h3>
        </blockquote>

        <div className="about__cards">
          <CardAboutUs
            link="https://www.nastavniki.org/campaign/pomoch-dengami"
            title="Пожертвования"
            linkText="сделать пожертвование"
            color="blue"
          >
            <div className="card__content about__card-content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">
                  Деньги пойдут на оплату работы кураторов программы
                  (профессиональные психологи/социальные работники), которые поддерживают дружбу между
                  ребенком и наставником.
                </p>
              </div>
            </div>
          </CardAboutUs>

          <CardAboutUs
            link="https://www.nastavniki.org/volontyorstvo/kak-stat-volonterom"
            title="Наставничество"
            linkText="подробнее"
            color="pink"
          >
            <div className="card__content about__card-content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">
                  Наставник «Старшие Братья Старшие Сестры» — значимый взрослый,
                  который становится для ребенка старшим другом, ролевой моделью, принимает
                  своего «Младшего» таким, какой он есть. «Старший» открывает для ребенка дверь в большой мир и дарит
                  ему надежду на более счастливое и успешное будущее.
                </p>
              </div>
            </div>
          </CardAboutUs>

          <CardAboutUs
            link="https://www.nastavniki.org/oficzialno/korporativnyim-partnyoram"
            title="Партнерство"
            linkText="подробнее"
            color="green"
          >
            <div className="card__content about__card-content">
              <div className="card__annotation">
                <p className="paragraph card__paragraph">
                  Компании поддерживают нас не только деньгами, но и делами. Мы
                  собрали все возможные способы поддержки и сотрудничества: профессиональная
                  помощь Pro Bono, организационная помощь, корпоративное волонтерство, мастер-классы, лекции, учебные
                  программы.
                </p>
              </div>
            </div>
          </CardAboutUs>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
