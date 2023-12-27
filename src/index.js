import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {Provider} from "react-redux";
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //comment for test
    //new comment
    //lknsldkvasv
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);
