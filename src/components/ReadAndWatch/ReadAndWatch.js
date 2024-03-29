/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import GuideCard, { shapes } from '../GuideCard/GuideCard';
import MainVideoPreview from '../MainVideoPreview/MainVideoPreview';
import './ReadAndWatch.scss';
import api from '../../utils/Api';
import ArticleCard from '../Articles/ArticleCard/ArticleCard';
import FilmCard from '../Films/FilmCard/FilmCard';
import BookCard from '../Books/BookCard/BookCard';
import PopupVideo from '../Films/PopupVideo/PopupVideo';
import Preloader from '../Preloader/Preloader';

export default function ReadAndWatch({ activeRubrics, clickOnCard }) {
  const [videoToShow, setVideoToShow] = React.useState([]);
  const [guidesToShow, setGuidesToShow] = React.useState([]);
  const [articlesToShow, setArticlesToShow] = React.useState([]);
  const [moviesToShow, setMoviesToShow] = React.useState([]);
  const [booksToShow, setBooksToShow] = React.useState([]);
  const [isPopupOpened, setIsPopupOpened] = React.useState(false);
  const currentFilm = React.useRef({});
  const isAnnotation = false;
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    // eslint-disable-next-line max-len
    Promise.all([api.getVideos({}), api.getGuides({}), api.getArticles(), api.getFilms(), api.getBooks()])
      .then(([resVideos, resGuides, resArticles, resMovies, resBooks]) => {
        setVideoToShow(resVideos.results);
        setGuidesToShow(resGuides.results);
        setArticlesToShow(resArticles.results);
        setMoviesToShow(resMovies.results);
        setBooksToShow(resBooks.results);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);
  const breakpoints = {
    320: {
      spaceBetween: 15,
      slidesPerView: 1,
    },
    720: {
      spaceBetween: 25,
      slidesPerView: 2,
    },
    1024: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
  };

  function showPopup(film) {
    currentFilm.current = film;
    setIsPopupOpened(true);
  }

  return isLoading ? (
    <Preloader />
  ) : (
    <main className="main">
      <section className="rights preview page__section">
        <div className="preview__title-wrap">
          <Link
            to="/guides"
            className="link"
          >
            <h1 className="chapter-title chapter-title_clickable">Справочник</h1>
          </Link>
          <div className="preview__bottons">
            <button className="preview__button preview__button_left catalog__button_left" type="button" aria-label="buttonLeft" disabled />
            <button className="preview__button preview__button_right catalog__button_right" type="button" aria-label="buttonRight" />
          </div>
        </div>
        <Swiper
          className="preview__row preview__card catalog-card"
          slidesPerView="auto"
          breakpoints={breakpoints}
          navigation={{
            prevEl: '.catalog__button_left',
            nextEl: '.catalog__button_right',
            disabledClass: 'swiper__button_disabled',
          }}
        >
          {
            guidesToShow.map((card) => (
              <SwiperSlide>
                <GuideCard
                  key={card.id}
                  shape={shapes[Math.floor(Math.random() * 3)]}
                  title={card.title}
                  image={card.imageUrl}
                  id={card.id}
                  card={card}
                  clickOnCard={clickOnCard}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </section>
      <section className="preview page__section">
        <div className="preview__title-wrap">
          <Link
            to="/video"
            className="link"
          >
            <h3
              className="chapter-title chapter-title_clickable"
            >
              Видео
            </h3>
          </Link
          >
          <div className="preview__bottons">
            <button className="preview__button preview__button_left video__button_left" type="button" aria-label="buttonLeft" />
            <button className="preview__button preview__button_right video__button_right" type="button" aria-label="buttonRight" />
          </div>
        </div>
        <div className="preview__row">
          <Swiper
            className="preview__row preview__card catalog-card"
            slidesPerView="auto"
            breakpoints={breakpoints}
            navigation={{
              prevEl: '.video__button_left',
              nextEl: '.video__button_right',
              disabledClass: 'swiper__button_disabled',
            }}
          >
            {videoToShow.map((movie) => (
              <SwiperSlide>
                <MainVideoPreview
                  link={movie.link}
                  key={movie.id}
                  title={movie.title}
                  imageUrl={movie.imageUrl}
                  caption={movie.caption}
                  info={movie.info}
                  tags={movie.tags}
                  activeRubrics={activeRubrics}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="preview page__section">
        <div className="preview__title-wrap">
          <Link
            to="/articles"
            className="link"
          >
            <h3 className="chapter-title chapter-title_clickable">Статьи</h3>
          </Link
          >
          <div className="preview__bottons">
            <button className="preview__button preview__button_left articles__button_left" type="button" aria-label="buttonLeft" disabled />
            <button className="preview__button preview__button_right articles__button_right" type="button" aria-label="buttonRight" />
          </div>
        </div>
        <div className="preview__row">
          <Swiper
            className="preview__row preview__card catalog-card"
            slidesPerView="auto"
            breakpoints={breakpoints}
            navigation={{
              prevEl: '.articles__button_left',
              nextEl: '.articles__button_right',
              disabledClass: 'swiper__button_disabled',
            }}
          >
            {
              articlesToShow.map((article) => (
                <SwiperSlide>
                  <ArticleCard
                    key={article.id}
                    article={article}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </section>
      <section className="preview page__section">
        <div className="preview__title-wrap">
          <Link
            to="/films"
            className="link"
          >
            <h3 className="chapter-title chapter-title_clickable">Фильмы</h3>
          </Link
          >
          <div className="preview__bottons">
            <button className="preview__button preview__button_left films__button_left" type="button" aria-label="buttonLeft" />
            <button className="preview__button preview__button_right films__button_right" type="button" aria-label="buttonRight" />
          </div>
        </div>
        <div className="preview__row">
          <Swiper
            className="preview__row preview__card catalog-card"
            slidesPerView="auto"
            breakpoints={breakpoints}
            navigation={{
              prevEl: '.films__button_left',
              nextEl: '.films__button_right',
              disabledClass: 'swiper__button_disabled',
            }}
          >
            {
              moviesToShow.map((film) => (
                <SwiperSlide>
                  <FilmCard
                    key={film.id}
                    film={film}
                    isAnnotation={isAnnotation}
                    showPopup={showPopup}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </section>
      <section className="preview page__section">
        <div className="preview__title-wrap">
          <Link
            to="/books"
            className="link"
          >
            <h3 className="chapter-title chapter-title_clickable">Книги</h3>
          </Link>
          <div className="preview__bottons">
            <button className="preview__button preview__button_left books__button_left" type="button" aria-label="buttonLeft" disabled />
            <button className="preview__button preview__button_right books__button_right" type="button" aria-label="buttonRight" />
          </div>
        </div>
        <div className="preview__row ">
          <Swiper
            className="preview__row preview__card catalog-card"
            slidesPerView="auto"
            breakpoints={breakpoints}
            navigation={{
              prevEl: '.books__button_left',
              nextEl: '.books__button_right',
              disabledClass: 'swiper__button_disabled',
            }}
          >
            {
              booksToShow.map((book) => (
                <SwiperSlide>
                  <BookCard
                    key={book.id}
                    book={book}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </section>
      <PopupVideo
        isOpened={isPopupOpened}
        setOpened={setIsPopupOpened}
        video={currentFilm.current}
      />
    </main>
  );
}

ReadAndWatch.propTypes = {
  activeRubrics: PropTypes.arrayOf(PropTypes.string).isRequired,
  clickOnCard: PropTypes.func.isRequired,
};
