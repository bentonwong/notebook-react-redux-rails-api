import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import createStore from './createStore'
import manageNotebook from './reducers/manageNotebook.js';

const store = createStore(manageNotebook);

function render() {
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}

export const renderer = { render: render };

store.dispatch({ type: '@@init'});
