/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import MainArticle from './MainArticle/MainArticle';
import ArticleCard from './ArticleCard/ArticleCard';
import Article from './Article/Article';
import Preloader from '../Preloader/Preloader';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { onLinkNav } from '../../utils/utils';
import api from '../../utils/Api';

import './Articles.scss';

const requestDelay = 500;

const breakpoints = {
  desktopHigh: 1920,
  desktopLow: 1440,
  mobileHigh: 1024,
  mobileLow: 425,
};

const limitDesktopHighRes = 12;
const limitDesktopLowRes = 12;
const limitMobile = 2;

function getLimit() {
  const currentWidth = document.documentElement.clientWidth;
  let limit;

  if (currentWidth > breakpoints.desktopLow) {
    limit = limitDesktopHighRes;
  } else if (currentWidth <= breakpoints.desktopLow && currentWidth > breakpoints.mobileHigh) {
    limit = limitDesktopLowRes;
  } else {
    limit = limitMobile;
  }

  return limit;
}

export default function Articles() {
  const { path } = useRouteMatch();
  const [isLoading, setIsLoading] = React.useState(true);
  const [articles, setArticles] = React.useState([]);
  const [mainArticle, setMainArticle] = React.useState(null);
  const cardCount = React.useRef(0);
  const paginationTimer = React.useRef(null);
  const currentPage = React.useRef(0);

  function onPageChange(page, delay = requestDelay) {
    clearTimeout(paginationTimer.current);
    setIsLoading(true);
    onLinkNav();
    const params = new URLSearchParams({ limit: getLimit(), offset: getLimit() * page.selected });

    paginationTimer.current = setTimeout(() => {
      api.getArticles(params)
        .then((resArticles) => {
          setArticles(resArticles.results);
          cardCount.current = resArticles.count;
          currentPage.current = page.selected;
        })
        .catch((err) => console.log('Ошибка загрузки данных: ', err))
        .finally(() => setIsLoading(false));
    }, delay);
  }

  try {
    React.useEffect(() => {
      api.getArticles(new URLSearchParams({ isMain: true }))
        .then((resArticle) => {
          setMainArticle(resArticle.results[0] || null);
        })
        .catch((err) => console.log('Ошибка загрузки данных: ', err));
    }, []);

    return (
      <ErrorBoundary>
        <Switch>
          <Route exact path={path}>
            <main className="main">
              <section className="lead page__section">
                <h1 className="main-title">Статьи</h1>
              </section>

              {
                mainArticle && (
                  <section className="main-card page__section">
                    <MainArticle mainArticle={mainArticle} />
                  </section>
                )
              }

              <section className="cards-grid page__section">
                {
                  isLoading && <div className="articles-preloader"><Preloader /></div>
                }
                {
                  articles.map((article) => <ArticleCard key={article.id} article={article} />)
                }
              </section>

              <section className="pagination page__section">
                <nav className="pagination__nav" aria-label="Навигация по страницам">
                  <ReactPaginate
                    initialPage={0}
                    onPageChange={onPageChange}
                    pageCount={Math.ceil(cardCount.current / getLimit())}
                    forcePage={currentPage.current}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    breakClassName="pagination__list-item section-title"
                    breakLinkClassName="pagination__link"
                    containerClassName="pagination__list"
                    activeClassName="pagination__link_active"
                    pageClassName="pagination__list-item section-title"
                    pageLinkClassName="pagination__link"
                    previousClassName="pagination__list-item"
                    previousLinkClassName="pagination__arrow-left"
                    nextClassName="pagination__list-item"
                    nextLinkClassName="pagination__arrow-right"
                    disabledClassName="pagination__arrow_disabled"
                    previousLabel=""
                    nextLabel=""
                  />
                </nav>
              </section>
            </main>
          </Route>
          <Route path={`${path}/:id`}>
            <Article />
          </Route>
        </Switch>
      </ErrorBoundary>
    );
  } catch (error) {
    console.log('Ошибка рендеринга статей: ', error);

    return (
      <main className="main">
        <section className="lead page__section">
          <h1 className="main-title">Статьи</h1>
        </section>

        <section className="main-card page__section">
          { error.message }
        </section>

        <section className="cards-grid page__section">
          {
            isLoading && <div className="articles-preloader"><Preloader /></div>
          }
        </section>
      </main>
    );
  }
}
