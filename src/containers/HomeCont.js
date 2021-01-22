import React,{useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import HomePelis from '../components/HomePelis'


const HomeCont = () => {
    const [mov,setMov]=useState([])
    const history = useHistory();

    useEffect(()=>{
        fetchMov()
    },[])

    const fetchMov = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6f80061b8f7dc41f74dd9c9a459deda4&language=es-ES&sort_by=primary_release_date.desc&page=1')
        const movs=await data.json()
        console.log(movs.results)
        setMov(movs.results)
    }
    const singleMovie = () => {
      history.push("/singleMovie");
    };

  return (
    <div className="wrapper">
        <h1>List Movies</h1>        
        <div className="cols">
        { mov.map((pelis,i)=>(           
            <HomePelis key={i} pelis={pelis} singleMovie={singleMovie}/>       
        ))}
     </div>
    </div>
  )
}

export default HomeCont
