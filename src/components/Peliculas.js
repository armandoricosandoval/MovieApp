import React from 'react';
import {Link} from 'react-router-dom';

const peliculas = ({movie}) => {
    
  return (
    <div className="col-md-3">
      <div className="card-deck">
        <div className="card">
       {/* <Link to={`/movies/${movie.imdbID}`}> */}
          <img src={movie.Poster} alt={movie.Title} className="card-img-top" width="100" />
        {/* </Link> */}
        <div className="card-body">
          <h4>{`${movie.Title} (${movie.Year})`}</h4>
          <p>{`Type: ${movie.Type}`}</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default peliculas
