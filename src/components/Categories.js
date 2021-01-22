import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap"

const Categories = () => {
    const [key, setKey] = useState('Action');
    const [mov, setMov] = useState([])
    const [movact, setmovact] = useState([])

    const history = useHistory();

    useEffect(() => {
        fetchMovAct()
    }, [])

    const fetchMovAct = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6f80061b8f7dc41f74dd9c9a459deda4&language=es-ES&sort_by=primary_release_date.desc&page=1&with_genres=28')
        const movs = await data.json()
        setMov(movs.results)
        console.log(movs.results)
        setmovact(movs.results)
    }
    const singleMovie = () => {
        history.push("/singleMovie");
    };




    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            style={{ justifyContent: "center" }}
        >
            <Tab eventKey="action" title="Action">
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
                <p>35 </p>
            </Tab>
            <Tab eventKey="Family" title="Family" >
                <p>10751</p>
            </Tab>
            <Tab eventKey="Romance" title="Romance" >
                <p>10749 </p>
            </Tab>
            <Tab eventKey="Drama" title="Drama" >
                <p>878</p>
            </Tab>
        </Tabs>
    );
}

export default Categories

