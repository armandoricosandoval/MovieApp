import React from 'react';

import { Link } from 'react-router-dom';



const Navbar = (props) => {

    return (
        
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <Link to="/movie" className="navbar-brand" >Home Movies </Link>       
      
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
          {props.user.id ? (
                    <div className="collapse navbar-collapse" id="navbarColor01"> 
                    <li className="nav-item">
                        <Link className="nav-link" onClick={props.logout} to={`/movie`}>Sign-Out</Link>
                    </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/perfil`}>Perfil</Link>
                        </li> </div>) : (
                        <div className="collapse navbar-collapse" id="navbarColor02">
                             <li className="nav-item">
                            <Link className="nav-link" to={`/login`}>Login</Link>
                        </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/signup`}>Register</Link>
                            </li> 
                        </div>)}
            
          </ul>
          <form onSubmit={props.handleSubmit} className="form-inline my-2 my-lg-0">
            <input 
            className="form-control mr-sm-1" type="text" 
            placeholder="Search"
            onChange={props.handleChange}
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
        
    );
};


export default Navbar;