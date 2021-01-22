import React from 'react';
import { Link } from 'react-router-dom';


import '../css/card.css';

//title.overview

const HomePelis = ({pelis,singleMovie}) => {

  
  return (
    <>      
    { pelis.media_type === "movie" ? (<div className="col-3" ontouchstart="this.classList.toggle('hover');">
          <Link to={`/movies/${pelis.id}`}><div className="containerCards " >
            <div className="front" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${pelis.poster_path})` }}>
            </div>
            <div className="back" >
              <div className="inner">
                <h2>{pelis.name}</h2>
                <h3>{pelis.media_type}</h3>
                <span>popularity:{pelis.popularity}</span>
              </div>
            </div>
          </div>
          </Link>
        </div>
        ) :( null)      
    }
 </>

  )
}

export default HomePelis
