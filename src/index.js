import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';


ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>    
    </React.StrictMode>        
  </Provider>,
  
  document.getElementById('root')
);


reportWebVitals();
