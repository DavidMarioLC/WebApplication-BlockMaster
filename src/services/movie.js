const URL_BASE = 'https://api.themoviedb.org/3';
const API_URL = `${URL_BASE}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc`;

const getAll = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data;
};

const getByName = async (value) => {
  const API_URL = `${URL_BASE}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${value}&page=1`;
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

const movie = {
  getAll,
  getByName,
};
export default movie;
