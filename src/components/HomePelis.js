import React from 'react';
import { Link } from 'react-router-dom';
import { CardDeck } from "react-bootstrap";

import '../css/card.css';

//title.overview

const HomePelis = ({pelis}) => {

  
  return (
    <>      
    { pelis.media_type === "movie" ? (<div className="col-3" ontouchstart="this.classList.toggle('hover');">
          <div className="containerCards ">
            <div className="front" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${pelis.poster_path})` }}>
            </div>
            <div className="back">
              <div className="inner">
                <p>{pelis.name}</p>
                <p>{pelis.media_type}</p>
                <span>popularity:{pelis.popularity}</span>
              </div>
            </div>
          </div>
        </div>) :( null)      
    }
 </>

  )
}

export default HomePelis
