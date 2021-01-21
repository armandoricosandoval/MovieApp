import React, { useReducer } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

// configuracion firebase para auth
import { AuthProvider } from "./firebase/contexts/AuthContext";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import ForgotPassword from "./components/ForgotPassword"


//style
import { Container,Row,Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

//containers
import NavbarCont from './containers/NavbarCont';

import PeliculasCont from './containers/PeliculasCont';
import HomeCont from './containers/HomeCont';
import SingleMovCont from './containers/SingleMovCont';


const App = () => {   

  return (
    <>
    <NavbarCont />        
        <AuthProvider>
            <Switch>
                <Route exact path='/' component={HomeCont } />
                <Route exact path='/movies' component={PeliculasCont } />
                <Route path='/movies/:movieId' component={SingleMovCont } />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/profile" component={Dashboard} />
                <Redirect from='/' to='/movies'></Redirect>
            </Switch>
        </AuthProvider>
        
        
    </>
);
}


export default App



