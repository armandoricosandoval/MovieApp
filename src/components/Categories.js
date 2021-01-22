import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { Tabs, Tab } from "react-bootstrap"

//este componente no es el mas el mejor ya no se mas........... por mejorar

const Categories = () => {
    const [key, setKey] = useState('Action');
    
    const [movact, setMovact] = useState([])
    const [movcom, setMovcom] = useState([])
    const [movfam, setMovfam] = useState([])
    const [movrom, setMovrom] = useState([])
    const [movdra, setMovdra] = useState([])

   

    useEffect(() => {
        fetchMovAct()
        fetchMovCom()
        fetchMovFam()
        fetchMovRom()
        fetchMovDra()
    }, [key])

    const fetchMovAct = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6f80061b8f7dc41f74dd9c9a459deda4&language=es-ES&sort_by=primary_release_date.desc&page=1&with_genres=28')
        const movs = await data.json()        
        setMovact(movs.results)
    }
    const fetchMovCom = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6f80061b8f7dc41f74dd9c9a459deda4&language=es-ES&sort_by=primary_release_date.desc&page=1&with_genres=35')
        const movs = await data.json()        
        setMovcom(movs.results)
    }
    const fetchMovFam = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6f80061b8f7dc41f74dd9c9a459deda4&language=es-ES&sort_by=primary_release_date.desc&page=1&with_genres=10751')
        const movs = await data.json()        
        setMovfam(movs.results)
    }
    const fetchMovRom = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6f80061b8f7dc41f74dd9c9a459deda4&language=es-ES&sort_by=primary_release_date.desc&page=1&with_genres=10749')
        const movs = await data.json()        
        setMovrom(movs.results)
    }
    const fetchMovDra= async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6f80061b8f7dc41f74dd9c9a459deda4&language=es-ES&sort_by=primary_release_date.desc&page=1&with_genres=878')
        const movs = await data.json()        
        setMovdra(movs.results)
    }
    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            style={{ justifyContent: "center" }}
        >
            <Tab eventKey="Action" title="Action">
                <div className="wrapper">
                    <h1>List Movies the Action</h1>
                    <div className="cols">
                        {movact.map((a) => (
                            <div key={a.id} className="col-3" ontouchstart="this.classList.toggle('hover');">
                                <Link to={`/movies/${a.id}`}>
                                    <div className="containerCards ">
                                        <div
                                            className="front"
                                            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${a.poster_path})` }}>
                                        </div>
                                        <div className="back">
                                            <div className="inner">
                                                <p>{a.title}</p>
                                                <span>{a.tagline}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>))}
                    </div>
                </div>
            </Tab>
            <Tab eventKey="Comedy" title="Comedy">
            <div className="wrapper">
                    <h1>List Movies the Comedy</h1>
                    <div className="cols">
                        {movcom.map((a) => (
                            <div key={a.id} className="col-3" ontouchstart="this.classList.toggle('hover');">
                                <Link to={`/movies/${a.id}`}>
                                    <div className="containerCards ">
                                        <div
                                            className="front"
                                            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${a.poster_path})` }}>
                                        </div>
                                        <div className="back">
                                            <div className="inner">
                                                <p>{a.title}</p>
                                                <span>{a.tagline}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>))}
                    </div>
                </div>
            </Tab>
            <Tab eventKey="Family" title="Family" >
            <div className="wrapper">
                    <h1>List Movies the Family</h1>
                    <div className="cols">
                        {movfam.map((a) => (
                            <div key={a.id} className="col-3" ontouchstart="this.classList.toggle('hover');">
                                <Link to={`/movies/${a.id}`}>
                                    <div className="containerCards ">
                                        <div
                                            className="front"
                                            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${a.poster_path})` }}>
                                        </div>
                                        <div className="back">
                                            <div className="inner">
                                                <p>{a.title}</p>
                                                <span>{a.tagline}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>))}
                    </div>
                </div>
            </Tab>
            <Tab eventKey="Romance" title="Romance" >
            <div className="wrapper">
                    <h1>List Movies the Romance</h1>
                    <div className="cols">
                        {movrom.map((a) => (
                            <div key={a.id} className="col-3" ontouchstart="this.classList.toggle('hover');">
                                <Link to={`/movies/${a.id}`}>
                                    <div className="containerCards ">
                                        <div
                                            className="front"
                                            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${a.poster_path})` }}>
                                        </div>
                                        <div className="back">
                                            <div className="inner">
                                                <p>{a.title}</p>
                                                <span>{a.tagline}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>))}
                    </div>
                </div>
            </Tab>
            <Tab eventKey="Drama" title="Drama" >
            <div className="wrapper">
                    <h1>List Movies the Drama</h1>
                    <div className="cols">
                        {movdra.map((a) => (
                            <div key={a.id} className="col-3" ontouchstart="this.classList.toggle('hover');">
                                <Link to={`/movies/${a.id}`}>
                                    <div className="containerCards ">
                                        <div
                                            className="front"
                                            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${a.poster_path})` }}>
                                        </div>
                                        <div className="back">
                                            <div className="inner">
                                                <p>{a.title}</p>
                                                <span>{a.tagline}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>))}
                    </div>
                </div>
            </Tab>
        </Tabs>
    );
}

export default Categories

