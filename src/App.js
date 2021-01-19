import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import NavbarContainer from './containers/NavbarContainer';


import 'bootswatch/dist/darkly/bootstrap.min.css';
import Peliculas from './containers/Peliculas';

export default class App extends React.Component {
    render() {
        return (
            <>
            <div >
                <NavbarContainer />
            </div>
            <div>
            <Peliculas/>
            </div>
            
            </>

        );
    }
};