import React from 'react';

import { Link } from 'react-router-dom';

import '../css/nav.css'

const Navbar = ({ data, handleSubmit, handleChange, user, logout }) => {


    return (
        <>
            <nav id="navbar" className="">
                <div className="nav-wrapper">
                    <div className="logo">
                        <a href="#home"><i className="fas fa-chess-knight"></i> Logo</a>
                    </div>
                    <ul id="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Register</Link></li>
                        <li><Link to="/categories">Categories</Link></li>                        
                    </ul>
                    <ul id="search">
                    <form onSubmit={handleSubmit} className="form-inline my-2 my-lg-0">
                <div className="form-group">                      
                        <select 
                        className="form-control" 
                        id="selectType"
                        onChange={handleChange}
                        value={data.type}
                        >
                        <option value='movie'>Movie</option>
                        <option value='series'>Series</option>
                        </select>
                    </div>
                    <input
                        className="form-control mr-sm-1" type="text"
                        placeholder="Search"
                        name='title'
                        value={data.title}
                        id='inputTitle'
                        onChange={handleChange}
                        onKeyDown={handleChange}
                    />
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form> 

                    </ul>
                    
                   
                </div>
              
            </nav>


          
        </>
    );
};


export default Navbar;


