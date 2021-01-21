import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Alert ,FormControl,InputGroup} from "react-bootstrap"
const peliculas = ({ movie,
  backToSearch,
  sortItems,
  sortingKey,
  currentUser,
  handleButton,
}) => {
console.log(currentUser,"buscando el user")
  return (
    
      <div className="col-md-4">
        <div className="card-deck">
          <Card >
            <Link to={`/movies/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.original_title} className="card-img-top" width="100" />
            </Link>
            <Card.Body>
              <h4>{`${movie.original_title} (${movie.release_date})`}</h4>
              <p>{`Type: ${movie.tagline}`}</p>
            </Card.Body>
            {currentUser && (
            <Button onClick={() => handleButton(movie)}>
            Add to Favs
            </Button>)}
            
          </Card>
        </div>
      </div>
 
  )
}

export default peliculas
