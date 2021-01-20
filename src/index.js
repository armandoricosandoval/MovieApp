
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

import "./style.css";
import 'bootswatch/dist/flatly/bootstrap.min.css';


ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);