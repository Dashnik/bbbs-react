import React from 'react';
import MainTitle from '../MainTitle/MainTitle';
import Filter from '../Filter/Filter';
import MainVideo from '../MainVideo/MainVideo';
import MainVideoPreview from '../MainVideoPreview/MainVideoPreview';
import Pagination from '../Pagination/Pagination';
import Preloader from '../Preloader/Preloader';
import { cardsPerPage } from '../../utils/Constants';
import api from '../../utils/Api';
// Work in progress
function Video() {
  const [mainState, setMainState] = React.useState({});
  const [moviesToShow, setMoviesToShow] = React.useState([]);
  const [isDataReady, setIsDataReady] = React.useState(false);
  const currentIndex = React.useRef(0);
  const filterArray = ['Все', 'Ресурсная группа', 'Эксперт', 'Пары', 'События', 'Медиа о нас'];
  React.useEffect(() => {
    api.getMain().then((res) => {
      setMainState(res);
      setMoviesToShow(res.movies.slice(currentIndex.current, cardsPerPage));
    })
      .then(() => setIsDataReady(true))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, [setMainState]);
  if (isDataReady) {
    return (
      <main className="main">
        <section className="lead page__section">
          <MainTitle title="Видео" />
          <Filter array={filterArray} onActive={() => 0} />
        </section>
        <section className="main-card page__section">
          <MainVideo
            title={mainState.video.title}
            info={mainState.video.info}
            link={mainState.video.link}
            imageUrl={mainState.video.imageUrl}
            duration={mainState.video.duration}
          />
        </section>
        <section className="main-section page__section cards-grid cards-grid_content_small-cards">
          {moviesToShow.map((movie) => (
            <MainVideoPreview
              link={movie.link}
              key={movie.id}
              title={movie.title}
              imageUrl={movie.imageUrl}
              caption={movie.caption}
              info={movie.info}
              tags={movie.tags}
            />
          ))}
        </section>
        <Pagination cards={mainState.movies} />
      </main>

    );
  }
  return (
    <Preloader />
  );
}

export default Video;