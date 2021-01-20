import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

// configuracion firebase para auth
import { AuthProvider } from "./contexts/AuthContext";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import ForgotPassword from "./components/ForgotPassword"


//containers
import PeliculasCont from './containers/PeliculasCont';

export default class App extends React.Component {
    render() {
        return (
            <>

                <AuthProvider>
                    <Switch>
                        <Route exact path='/movies' component={PeliculasCont}></Route>
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/forgot-password" component={ForgotPassword} />
                        <Route exact path="/perfil" component={Dashboard} />
                        <Redirect from='/' to='/movies'></Redirect>
                    </Switch>
                </AuthProvider>

            </>
        );
    }
};