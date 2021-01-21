import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams} from "react-router-dom";
import { fetchMovie } from "../Redux/action-creators/peliculas";
import SingleMovie from "../components/SingleMovie";



const SingleMovCont = () => {    
  const { movieId } = useParams();
  const currentMovie = useSelector((state) => state.movies.selected);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie(movieId));
  }, []);

 
  return (
    <SingleMovie currentMovie={currentMovie} />
  );
}

export default SingleMovCont
