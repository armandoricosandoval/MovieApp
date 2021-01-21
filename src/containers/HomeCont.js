import React,{useState,useEffect} from 'react'
import HomePelis from '../components/HomePelis'

const HomeCont = () => {
    const [mov,setMov]=useState([])

    useEffect(()=>{
        fetchMov()
    },[])

    const fetchMov = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=6f80061b8f7dc41f74dd9c9a459deda4')
        const movs=await data.json()
        console.log(movs.results)
        setMov(movs.results)
    }


  return (
    <div className="wrapper">
        <h1>List Movies</h1>        
        <div className="cols">
        { mov.map((pelis,i)=>(
            <HomePelis key={i} pelis={pelis}/>
        ))}
     </div>
    </div>
  )
}

export default HomeCont
