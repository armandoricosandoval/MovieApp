import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Peliculas from "../components/peliculas.js";
import { useAuth } from "../firebase/contexts/AuthContext"

import { addMovie } from "../Redux/action-creators/favs";

const PeliculasCont = () => {
  const movies = useSelector((state) => state.movies.list);
  const history = useHistory();
  const [sortingKey, setSortingKey] = useState("");
  const currentUser = useAuth();
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
console.log(currentUser);
  
  return (
    <>
    <div className="row">  
    { movies.map((movie,i)=>(
       <Peliculas
       key={i}
       movie={movie}
       sortingKey={sortingKey}
       sortItems={sortItems}
       backToSearch={backToSearch}
       currentUser={currentUser}
       handleButton={handleButton}/>   
       ))}
       </div>
     </>
  )
}

export default PeliculasCont
