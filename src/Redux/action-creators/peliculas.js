import { RECEIVE_MOVIES, RECEIVE_MOVIE } from "../../constants";
import axios from 'axios';


export const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies,
});

const receiveMovie = (movie) => ({
  type: RECEIVE_MOVIE,
  movie,
});

export const fetchMovies = ({ title = "", type = "" }) => (
  dispatch
) => {
  return axios
  
    .get(`https://api.themoviedb.org/3/search/movie?api_key=6f80061b8f7dc41f74dd9c9a459deda4&language=en-US&page=1&include_adult=false&query=${title}`)
    .then((res) => res.data)
    .then((movies) => {
      if (!movies.results) {
        dispatch(receiveMovies([]));
      }
      movies = movies.results.map((movie) => {
        return axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=6f80061b8f7dc41f74dd9c9a459deda4`
        );
      });
      return Promise.all(movies);
    })
    .then((movies) => {
      return dispatch(receiveMovies(movies.map((movie) => movie.data)));
    })
    .catch((err) => console.log(err));
};

export const fetchMovie = (movieId) => (dispatch) => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=6f80061b8f7dc41f74dd9c9a459deda4`)
    .then((res) => res.data)
    .then((movie) => dispatch(receiveMovie(movie)))
    .catch((err) => console.log(err));
};
