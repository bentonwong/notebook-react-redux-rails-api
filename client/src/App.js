import React, { Component } from 'react';
import NotebookInput from './components/notebooks/NotebookInput'
import Notebooks from './components/notebooks/Notebook'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NotebookInput store={this.props.store}/>
        <Notebook store={this.props.store} />
      </div>
    );
  }
}

export default App;
