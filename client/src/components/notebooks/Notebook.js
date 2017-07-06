import React from 'react';
import Notes from '../notes/Notes'

const Notebook = ({notebook}) => {
  return (
    <li className="list-group-item">
      <div>
        <h4>{notebook.title}</h4>
        <Notes notebook={notebook} />
      </div>
    </li>
  );
};

export default Notebook;
