import React from 'react';
import Notebook from './Notebook'

const Notebooks = ({notebooks}) => {
  const notebookList = notebooks.map((notebook) => {
    return <Notebook notebook={notebook} key={notebook.id} />
  });
  return(
    <ul className="col-md-4 list-group">
      {notebookList}
    </ul>
  )
}

export default Notebooks;
