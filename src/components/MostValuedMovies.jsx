import { useSelector } from 'react-redux';
import CardMovie from './CardMovie';

const MostValuedMovies = () => {
  const { movies } = useSelector((state) => state);
  const listMovies = movies.filter((movie) => movie.vote_average > 7);

  return listMovies.map((movie) => <CardMovie key={movie.id} movie={movie} />);
};

export default MostValuedMovies;
