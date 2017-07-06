import React, { Component } from 'react';
import Notebook from './Notebook'

const Notebooks = (props) => {
  const notebooks = props.notebooks.map((notebook, index) => {
    return <Notebook notebook={notebook} key={index} store={props.store} />
  });
  return(
    <ul>
      {notebooks}
    </ul>
  )
}

export default Notebooks;
