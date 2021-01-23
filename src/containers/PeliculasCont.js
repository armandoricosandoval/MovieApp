import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Peliculas from "../components/Peliculas.js";

import { addMovie } from "../Redux/action-creators/favs";
import '../css/card.css';
const PeliculasCont = () => {
  const movies = useSelector((state) => state.movies.list);
  const history = useHistory();
  

  const dispatch = useDispatch();

  const singleMovie = () => {
    history.push("/singleMovie");
  };
 
  const handleButton = (currentMovie) => {
    dispatch(addMovie(currentMovie))
      .then(() => history.push(`/profile`))
      .catch((err) => console.log(err));
  };


  return (
    
      <div className="wrapper">
        <h1>List Movies</h1>        
        <div className="cols">
            {movies.map((movie, i) => (
              <Peliculas
                key={i}
                movie={movie}          
                singleMovie={singleMovie}
                handleButton={handleButton} />
            ))}

          </div>
          </div>
        
  )
}

export default PeliculasCont
