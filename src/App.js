import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
import GridMovies from './components/GridMovies';
import Header from './components/Header';
import LayoutMovies from './components/LayoutMovies';
import Modal from './components/Modal';
import NotFoundSearch from './components/NotFoundSearch';
import Slider from './components/Slider';
import Spinner from './components/Spinner';
import TitleSection from './components/TitleSection';
import { initGenderMovies, initStateMovies } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();
  const { modal, loadingScroll, filter, searchMoviesList } = useSelector(
    (state) => state
  );
  const interceptorRef = useRef();

  useEffect(() => {
    dispatch(initGenderMovies());
    dispatch(initStateMovies());

    const observer = new IntersectionObserver(
      ([entries], observer) => {
        const { isIntersecting } = entries;

        if (isIntersecting) {
          dispatch(initStateMovies());
        }
      },
      { threshold: 1.0 }
    );
    observer.observe(interceptorRef.current);

    return () => observer.disconnect();
    // eslint-disable-next-line
  }, []);

  const getTitle = (filter) => {
    //using a dictionary to get the title
    const options = {
      'least-valued': 'Menos valoradas',
      'most-valued': 'Más valoradas',
      search: 'Resultados de la busqueda',
      all: 'Todas las Peliculas',
    };
    return options[filter];
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Slider />
      <LayoutMovies>
        <TitleSection>{getTitle(filter)}</TitleSection>
        <GridMovies>
          <Outlet />
        </GridMovies>
        {loadingScroll ? <Spinner /> : null}
        {filter === 'search' && searchMoviesList.length === 0 ? (
          <NotFoundSearch />
        ) : null}
      </LayoutMovies>
      {modal ? <Modal /> : null}
      <div ref={interceptorRef}></div>
    </>
  );
};

export default App;
