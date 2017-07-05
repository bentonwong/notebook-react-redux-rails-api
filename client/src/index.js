import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createStore from './createStore'
import manageNotebook from './reducers/manageNotebook'

const store = createStore(manageNotebook);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
