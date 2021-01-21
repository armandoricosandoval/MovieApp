import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchMovies } from "../Redux/action-creators/peliculas";


import Navbar from '../components/Navbar';



const NavbarCont = ({user,logout}) => {
  const [data, setData] = useState({
    title: "",
    type: "Movie",
  });
 

  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    setData({
      ...data,
      [evt.target.name]: evt.target.value,
    });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(fetchMovies(data))
      .then(() => history.push("/"));
  }

  return (
    <>
    
      <Navbar
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        data={data}
        user={user}
        logout={logout}
      />
    
    
    </>
  )
}

export default NavbarCont
