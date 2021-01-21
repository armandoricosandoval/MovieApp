import React from 'react';
import { Link } from 'react-router-dom';
import { CardDeck } from "react-bootstrap";

import '../css/card.css';

//title.overview

const Peliculas = ({ movie,
  backToSearch,
  sortItems,
  sortingKey,
  handleButton,
  user
}) => {

  console.log(movie, "peliculas")
  return (
    <>      
        <div className="col-3" ontouchstart="this.classList.toggle('hover');">
          <div className="containerCards ">
            <div className="front" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${movie.poster_path})` }}>
            </div>
            <div className="back">
              <div className="inner">
                <p>{movie.title}</p>
                <span>{movie.tagline}</span>
              </div>
            </div>
          </div>
        </div>
      

    </>

  )
}

export default Peliculas
