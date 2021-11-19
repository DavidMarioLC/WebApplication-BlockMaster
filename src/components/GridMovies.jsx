import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import CardMovie from '../components/CardMovie';
import Spinner from '../components/Spinner';
import TitleSection from '../components/TitleSection';
import { searchByName, setFilterMovies } from '../redux/actions';
import Modal from './Modal';
import NotFoundSearch from './NotFoundSearch';

const GridMovies = () => {
  const dispatch = useDispatch();
  let [searchParams] = useSearchParams();
  let param = searchParams.get('filterby') || searchParams.get('search');

  const { movies, filter, searchMoviesList, loading, modal } = useSelector(
    (state) => state
  );

  const AllMovies = () => {
    return movies.map((movie) => <CardMovie key={movie.id} movie={movie} />);
  };
  const MostValuesMovies = () => {
    const listMovies = movies.filter((movie) => movie.vote_average > 7);
    return listMovies.map((movie) => (
      <CardMovie key={movie.id} movie={movie} />
    ));
  };
  const LestValuedMovies = () => {
    const listMovies = movies.filter((movie) => movie.vote_average < 7);
    return listMovies.map((movie) => (
      <CardMovie key={movie.id} movie={movie} />
    ));
  };
  const SearchMovies = () => {
    return searchMoviesList.map((movie) => {
      if (movie.poster_path !== null) {
        return <CardMovie key={movie.id} movie={movie} />;
      }
      return null;
    });
  };

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

  useEffect(() => {
    if (!param) return;

    if (param === 'mas-valoradas') {
      dispatch(setFilterMovies('most-valued'));
    } else if (param === 'menos-valoradas') {
      dispatch(setFilterMovies('least-valued'));
    } else {
      dispatch(searchByName(param));
      dispatch(setFilterMovies('search'));
    }
  }, [param, dispatch]);

  return (
    <>
      <TitleSection>{getTitle(filter)}</TitleSection>
      {loading ? (
        <Spinner />
      ) : (
        <StyledGridMovies>
          {filter === 'all' ? (
            <AllMovies />
          ) : filter === 'most-valued' ? (
            <MostValuesMovies />
          ) : filter === 'least-valued' ? (
            <LestValuedMovies />
          ) : filter === 'search' ? (
            <SearchMovies />
          ) : null}
        </StyledGridMovies>
      )}
      {filter === 'search' && searchMoviesList.length === 0 ? (
        <NotFoundSearch />
      ) : null}
      {modal ? <Modal /> : null}
    </>
  );
};

const StyledGridMovies = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  place-content: center;
  align-items: center;
  gap: 1rem;
`;

export default GridMovies;
