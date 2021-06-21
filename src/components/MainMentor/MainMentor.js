import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MainMentor.scss';

function MainMentor({
  title, address, imageUrl, link, description, info,
}) {
  const paragraphs = description.split('\n');
  return (
    <section className="main-section page__section">
      <article className="card-container card-container_type_main-article">
        <div className="card card_type_main card_color_yellow">
          <p className="rubric card__rubric">Выбор наставника</p>
          <div className="card__title-wrap">
            <Link to="/place" className="card__link-wrap">
              <h2 className="section-title card__title">{title}</h2>
            </Link>
            <p className="caption card__title-caption">{address}</p>
          </div>
          <Link to="/place" className="card__link-wrap card__link-wrap_content_article-img">
            <img src={imageUrl} alt="Сплав на байдарках" className="card__img" />
          </Link>
          <a href={link} className="link card__link">перейти на сайт</a>
        </div>
        <div className="card card_content_annotation card_type_main">
          <div className="card__content">
            <p className="caption card__annotation-caption">{info}</p>
            <div className="card__annotation card__annotation_position_main-card">
              {paragraphs.map((paragraph, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <p className="paragraph card__paragraph" key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

MainMentor.propTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MainMentor;
