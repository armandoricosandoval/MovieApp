import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';




import PeliculasCont from './containers/PeliculasCont';

export default class App extends React.Component {
    render() {
        return (
            <>           
            <div>
            <PeliculasCont/>
            </div>            
            </>

        );
    }
};