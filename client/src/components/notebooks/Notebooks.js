import React, { Component } from 'react';
import Notebook from './Notebook'

const Notebooks = (props) => {
  render() {
    const notebooks = props.notebooks.map((notebook, index) => {
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
