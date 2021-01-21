import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Peliculas from "../components/Peliculas.js";

import { addMovie } from "../Redux/action-creators/favs";
import '../css/card.css';
const PeliculasCont = () => {
  const movies = useSelector((state) => state.movies.list);
  const history = useHistory();
  const [sortingKey, setSortingKey] = useState("");

  const dispatch = useDispatch();

  const backToSearch = () => {
    history.push("/");
  };
  const sortItems = (e) => {
    setSortingKey(e.target.innerHTML);
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
                sortingKey={sortingKey}
                sortItems={sortItems}
                backToSearch={backToSearch}
                handleButton={handleButton} />
            ))}

          </div>
          </div>
        
  )
}

export default PeliculasCont
