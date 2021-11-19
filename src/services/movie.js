const URL_BASE = 'https://api.themoviedb.org/3';

const getAll = async (page) => {
  const API_URL = `${URL_BASE}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&sort_by=popularity.desc`;
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

const getAllGenders = async () => {
  const API_URL = `${URL_BASE}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

const movie = {
  getAll,
  getByName,
  getAllGenders,
};
export default movie;
