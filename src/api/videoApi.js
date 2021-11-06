export const fetchVideos = async () => {
  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc`;

  const response = await fetch(API_URL);
  const data = await response.json();

  return data;
};
