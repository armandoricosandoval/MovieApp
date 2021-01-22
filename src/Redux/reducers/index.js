import { combineReducers } from "redux";
import usersReducer from './users-reducer';
import moviesReducer from './peliculas-reducer';
import favsReducer from "./favs-reducer";


export default combineReducers({
  movies: moviesReducer,
  users: usersReducer,
  favs: favsReducer,
});
