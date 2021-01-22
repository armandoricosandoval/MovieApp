import React from "react";
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
      <div className="container">
        <div className="card">
          <div className="img-container"  style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${currentMovie.poster_path})` }}></div>
          <div className="card-content">
            <h4>{currentMovie.release_date}</h4>
            <h1>{currentMovie.original_title}</h1>
            <br/>
            <p className="excerpt"><b>overview:</b>{currentMovie.overview}</p>
            {/* <p className="author">By Jrom</p> */}
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