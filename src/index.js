import React from 'react';
import ReactDOM from 'react-dom';
import { initStore } from 'react-recollect';

import App from './App';
import './index.css';

initStore({
    tasks: [],
    counter: 0,
});

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
