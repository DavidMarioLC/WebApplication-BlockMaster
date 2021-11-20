import { useSelector } from 'react-redux';
import CardMovie from './CardMovie';
const SearchMovies = () => {
  const { searchMoviesList } = useSelector((state) => state);
  return searchMoviesList.map((movie) => {
    if (movie.poster_path !== null) {
      return <CardMovie key={movie.id} movie={movie} />;
    }
    return null;
  });
};

export default SearchMovies;
