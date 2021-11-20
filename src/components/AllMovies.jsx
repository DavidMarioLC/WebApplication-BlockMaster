import { useSelector } from 'react-redux';
import CardMovie from './CardMovie';

const AllMovies = () => {
  const { movies } = useSelector((state) => state);
  return movies.map((movie) => <CardMovie key={movie.id} movie={movie} />);
};

export default AllMovies;
