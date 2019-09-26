import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App1 from './App1';
// import App2 from './App2';
// import ButtonSize from './App3';
// import App from './App4';
import App from './App9';

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<App />,document.getElementById('root'));
// ReactDOM.render(<App1 />,document.getElementById('root'));
// ReactDOM.render(<App2 />,document.getElementById('root'));
// ReactDOM.render(<ButtonSize />,document.getElementById('root'));
ReactDOM.render(<App />,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

