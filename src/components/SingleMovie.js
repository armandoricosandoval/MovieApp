import React from "react";


const SingleMovie = ({currentMovie}) => {
  console.log(currentMovie)
  const checkLength = (str) => {
    if (!str) return "-";
    if (str.length > 180) return str.substring(0, 180) + "...";
    return str;
  };
  return (
    <div id='single-movie'>    
      <div className='movie-info'>
        <div className='movie-header'>
          <h3>{currentMovie.original_title}</h3>          
        </div>
        <div className='movie-container'>
          <img src={`https://image.tmdb.org/t/p/w200${currentMovie.poster_path}`} alt=""/>          
          <div className='content'>
            <h5>Data:</h5>
            <p>{currentMovie.release_date}</p>            
            <h5>Review:</h5>
            <p>{checkLength(currentMovie.overview)}</p>
            <h5>popularity:</h5>
            <p>{currentMovie.popularity}</p>           
          </div>
        </div>
      </div>
    
  </div>
  )
}

export default SingleMovie
