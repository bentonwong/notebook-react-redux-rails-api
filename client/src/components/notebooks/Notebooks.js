import React from 'react';
import Notebook from './Notebook'

const Notebooks = ({notebooks}) => {
  const notebookList = notebooks.map((notebook) => {
    return <Notebook notebook={notebook} key={notebook.id} />
  });
  return(
    <ul>
      {notebookList}
    </ul>
  )
}

export default Notebooks;
