import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

// configuracion firebase para auth
import { AuthProvider } from "./firebase/contexts/AuthContext";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import ForgotPassword from "./components/ForgotPassword"


//containers
import NavbarCont from './containers/NavbarCont';
import Navbar from './components/Navbar';

export default class App extends React.Component {
    render() {
        return (
            <>
                    <NavbarCont/>
                <AuthProvider>
                    <Switch>
                        <Route exact path='/' component={NavbarCont}></Route>
                        <Route  path="/signup" component={Signup} />
                        <Route  path="/login" component={Login} />
                        <Route  path="/forgot-password" component={ForgotPassword} />
                        <Route  path="/perfil" component={Dashboard} />
                        <Redirect  to='/'></Redirect>
                    </Switch>
                </AuthProvider>

            </>
        );
    }
};