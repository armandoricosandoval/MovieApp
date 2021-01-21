import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchMovies } from "../Redux/action-creators/peliculas";


import Navbar from '../components/Navbar';
import PeliculasCont from "./PeliculasCont";


const NavbarCont = () => {
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
    <div className='container'>
      <Navbar
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        data={data}
      />
    </div>
    <div>
      <PeliculasCont/>
    </div>
    </>
  )
}

export default NavbarCont
