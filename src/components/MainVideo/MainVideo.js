import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MainVideo({
  title, info, link, imageUrl, duration,
}) {
  function parseDuration(str) {
    const hours = str.slice(0, 2);
    const minutes = str.slice(3, 5);
    const seconds = str.slice(6);
    if (hours > 0) { return `${hours}:${minutes}:${seconds}`; }
    return `${minutes}:${seconds}`;
  }
  return (
    <article className="card-container card-container_type_main-video">
      <div className="card card_color_yellow card_content_video-preview">
        <div className="card__title-wrap">
          <Link to="/video" className="card__link-wrap">
            <h2 className="section-title card__title">{title}</h2>
          </Link>
          <p className="caption card__title-caption">{info}</p>
        </div>
        <a href={link} className="link card__link link_action_open-video">смотреть видео</a>
      </div>
      <div className="card card_color_yellow card_content_video video">
        <Link to="/video" className="card__link-wrap">
          <img src={imageUrl} alt="Превью видео" className="video__img video__img_position_main-video" />
          <p className="video__duration video__duration_position_main-video paragraph">{parseDuration(duration)}</p>
        </Link>
      </div>
    </article>
  );
}

MainVideo.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

export default MainVideo;
