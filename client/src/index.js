import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

const App = () => {
  return <div>Hi!</div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
