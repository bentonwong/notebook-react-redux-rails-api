import React, { Component } from 'react';
import Notebook from './Notebook'

class Notebooks extends Component {
  render() {
    const notebooks = this.props.store.getState().notebooks.map((notebook, index) => {
      return <Notebook notebook={notebook} key={index} store={this.props.store} />
    });

    return(
      <ul>
        {notebooks}
      </ul>
    )
  }
}

export default Notebooks;
