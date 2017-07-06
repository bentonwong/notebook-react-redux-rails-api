import React, { Component } from 'react';
import NotebookInput from './components/notebooks/NotebookInput'
import Notebooks from './components/notebooks/Notebooks'

const notebooksAPIURL = 'http://localhost:3000/notebooks.json'

class App extends Component {
  constructor() {
    super();

    this.state = {
      notebooks: [],
      selectedNotebook: null
    };
  };

  componentDidMount() {
    fetch(notebooksAPIURL)
      .then(resp => resp.json())
        .then(data => {
          this.setState({notebooks: data});
        });
  }

  render() {
    return (
      <div>
        <Notebooks notebooks={this.state.notebooks}/>
        <NotebookInput />
      </div>
    );
  }
}

export default App;
