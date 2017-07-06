import React from 'react';
import Notes from '../notes/Notes'

const Notebook = ({notebook}) => {
  return (
    <li className="list-group-item">
      <div>
        <h3>{notebook.title}</h3>
      </div>
      <Notes notebook={notebook}/>
    </li>
  );
};

export default Notebook;
