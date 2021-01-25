import React from "react";
import { Button } from "react-bootstrap"
import '../css/movie.css';

const SingleMovie = ({ currentMovie }) => {
  console.log(currentMovie)


  return (


    <>
      {/*  <div className="media col-sm-6 col-xs-6" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${currentMovie.poster_path})` }}>
        </div>
        <div className="card-body col-sm-6 col-xs-6">
          <p className="tagline " style={{ text: "center" }}>{currentMovie.release_date}</p>
          <h3 className="title " style={{ text: "center" }}>{currentMovie.original_title}</h3>
          <div className="divider"></div>
          <p className="paragraph" style={{ text: "justify" }}>{currentMovie.overview}</p>          
        </div> */}
      <div className="containerMov">
        <div className="card1">
          <div className="img-container" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w100${currentMovie.poster_path})` }}></div>
          <div className="card-content">
            <h4>{currentMovie.release_date}</h4>
            <h1>{currentMovie.original_title}</h1>
            <br />
            <p className="excerpt"><b>overview:</b>{currentMovie.overview}</p>

            
            <div className="stars" >
            <Button variant="outline-secondary"> <a href="https://www.themoviedb.org/movie/upcoming"> WEBSITE</a></Button>
              <div className="rating" id="like">
                <input type="radio" id="start_5" name="like" value="5" />
                <label for="start_5" title="Five">&#10084;</label>

                <input type="radio" id="start_4" name="like" value="4" />
                <label for="start_4" title="Four">&#10084;</label>

                <input type="radio" id="start_3" name="like" value="3" />
                <label for="start_3" title="Three">&#10084;</label>

                <input type="radio" id="start_2" name="like" value="2" />
                <label for="start_2" title="Two">&#10084;</label>

                <input type="radio" id="start_1" name="like" value="1" />
                <label for="start_1" title="One">&#10084;</label>
              </div>
              <p className="stars__text">{currentMovie.popularity}</p>
            </div>
          </div>
        </div>
      </div>
    
                
        
      
    </>





  )
}

export default SingleMovie
/*   <div id='single-movie'>
      <div className='movie-info'>
        <div className='movie-header'>
          <h1>{currentMovie.original_title}</h1>
        </div>
        <div className='movie-container'>
          <img src={`https://image.tmdb.org/t/p/w200${currentMovie.poster_path}`} alt=""/>
          <div className='content'>
            <h4>Data:</h4>
            <p>{currentMovie.release_date}</p>
            <h4>Review:</h4>
            <p>{checkLength(currentMovie.overview)}</p>
            <h4>popularity:</h4>
            <p>{currentMovie.popularity}</p>
          </div>
        </div>
      </div>

  </div> */