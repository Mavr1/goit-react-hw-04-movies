import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';

export const getMostPopular = () =>
  axios.get('/3/trending/movie/week?api_key=099506e957cfaf2ff63b90257184931e');

export const searchMovie = () =>
  axios.get(
    '/3/search/movie?&language=en-US&page=1&include_adult=false?api_key=099506e957cfaf2ff63b90257184931e'
  );

export const getMovie = (id) =>
  axios.get(
    `/3/movie/${id}&language=en-US?api_key=099506e957cfaf2ff63b90257184931e`
  );

export const getMovieCast = (id) =>
  axios.get(`/3/movie/${id}/credits?api_key=099506e957cfaf2ff63b90257184931e`);
