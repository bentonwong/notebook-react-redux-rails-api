import React, { Component } from 'react';
import NotebookInput from './components/notebooks/NotebookInput'
import Notebooks from './components/notebooks/Notebook'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NotebookInput />
        <Notebooks />
      </div>
    );
  }
}

export default App;
