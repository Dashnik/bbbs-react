/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import cards from '../../utils/catalogData';
import CatalogCard, { shapes } from '../Catalog/CatalogCard/CatalogCard';
import MainVideoPreview from '../MainVideoPreview/MainVideoPreview';
import './ReadAndWatch.scss';
import api from '../../utils/Api';
import ArticleCard from '../Articles/ArticleCard/ArticleCard';
import { mainArticle as leadArticle, articleCards } from '../../utils/articlesData';
import { films } from '../../utils/filmsData';
import FilmCard from '../Films/FilmCard/FilmCard';
import BookCard from '../Books/BookCard/BookCard';
import { books } from '../../utils/booksData';

export default function ReadAndWatch(activeRubrics) {
  const [moviesToShow, setMoviesToShow] = React.useState([]);
  React.useEffect(() => {
    api.getMain().then((res) => {
      setMoviesToShow(res.movies);
    })
      .catch((err) => console.log(err));
  }, []);
  const isAnnotation = false;
  return (
    <main className="main">
      <section className="rights preview page__section">
        <div className="preview__title-wrap">
          <Link
            to="./catalog"
            className="link"
          >
            <h1 className="chapter-title chapter-title_clickable">Справочник</h1>
          </Link
          >
          <div className="preview__bottons">
            <button className="preview__button preview__button_left catalog__button_left" type="button" aria-label="buttonLeft" disabled />
            <button className="preview__button preview__button_right catalog__button_right" type="button" aria-label="buttonRight" />
          </div>
        </div>
        {/* <div className="preview__row"> */}
        <Swiper
          className="preview__row preview__card catalog-card"
          slidesPerView="auto"
          breakpoints={{
            320: {
              spaceBetween: 15,
            },
            720: {
              spaceBetween: 25,
            },
            1024: {
              spaceBetween: 30,
            },
          }}
          navigation={{
            prevEl: '.catalog__button_left',
            nextEl: '.catalog__button_right',
            disabledClass: 'swiper__button_disabled',
          }}
        >
          {
            cards.map((card, i) => (
              <SwiperSlide>
                <CatalogCard
                  key={i.toString()}
                  shape={shapes[Math.floor(Math.random() * 3)]}
                  title={card.title}
                  image={card.image}
                  path={card.path}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
        {/* </div> */}
      </section>
      <section className="preview page__section">
        <div className="preview__title-wrap">
          <Link
            to="./video"
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
            breakpoints={{
              320: {
                spaceBetween: 15,
              },
              720: {
                spaceBetween: 25,
              },
              1024: {
                spaceBetween: 30,
              },
            }}
            navigation={{
              prevEl: '.video__button_left',
              nextEl: '.video__button_right',
              disabledClass: 'swiper__button_disabled',
            }}
          >
            {moviesToShow.map((movie) => (
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
            to="./articles"
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
            breakpoints={{
              320: {
                spaceBetween: 15,
              },
              720: {
                spaceBetween: 25,
              },
              1024: {
                spaceBetween: 30,
              },
            }}
            navigation={{
              prevEl: '.articles__button_left',
              nextEl: '.articles__button_right',
              disabledClass: 'swiper__button_disabled',
            }}
          >
            {
            // eslint-disable-next-line max-len
            articleCards.map((card, i) => <SwiperSlide><ArticleCard key={i.toString()} {...card} /></SwiperSlide>)
            }
          </Swiper>
        </div>
      </section>
      <section className="preview page__section">
        <div className="preview__title-wrap">
          <Link
            to="./films"
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
            breakpoints={{
              320: {
                spaceBetween: 15,
              },
              720: {
                spaceBetween: 25,
              },
              1024: {
                spaceBetween: 30,
              },
            }}
            navigation={{
              prevEl: '.films__button_left',
              nextEl: '.films__button_right',
              disabledClass: 'swiper__button_disabled',
            }}
          >
            {// eslint-disable-next-line max-len
              films.map((film, i) => (
                <SwiperSlide>
                  <FilmCard key={i.toString()} film={film} isAnnotation={isAnnotation} />
                  {' '}
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </section>
      <section className="preview page__section">
        <div className="preview__title-wrap">
          <Link
            to="./books"
            className="link"
          >
            <h3 className="chapter-title chapter-title_clickable">Книги</h3>
          </Link
          >
          <div className="preview__bottons">
            <button className="preview__button preview__button_left books__button_left" type="button" aria-label="buttonLeft" disabled />
            <button className="preview__button preview__button_right books__button_right" type="button" aria-label="buttonRight" />
          </div>
        </div>
        <div className="preview__row ">
          <Swiper
            className="preview__row preview__card catalog-card"
            slidesPerView="auto"
            breakpoints={{
              320: {
                spaceBetween: 15,
              },
              720: {
                spaceBetween: 25,
              },
              1024: {
                spaceBetween: 30,
              },
            }}
            navigation={{
              prevEl: '.books__button_left',
              nextEl: '.books__button_right',
              disabledClass: 'swiper__button_disabled',
            }}
          >
            {
              books.map((book) => <SwiperSlide><BookCard key={book.id} book={book} /></SwiperSlide>)
            }
          </Swiper>
        </div>
      </section>
    </main>
  );
}

ReadAndWatch.defaultProps = {
  activeRubrics: PropTypes.arrayOf(PropTypes.string).isRequired,
  mainArticle: leadArticle,
};