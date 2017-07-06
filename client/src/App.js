import React, { Component } from 'react';
import NotebookInput from './components/notebooks/NotebookInput'
import Notebooks from './components/notebooks/Notebooks'
import NotebookList from './containers/notebook-list.js'

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
          this.setState({
            notebooks: data,
            selectedNotebook: data[0]
          });
        });
  }

  render() {
    return (
      <div>
        <NotebookInput />
        <Notebooks notebooks={this.state.notebooks}/>
        <NotebookList />
      </div>
    );
  }
}

export default App;
