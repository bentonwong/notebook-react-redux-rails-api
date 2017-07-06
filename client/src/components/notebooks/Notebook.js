import React from 'react';

const Notebook = ({notebook}) => {
  return (
    <li className="list-group-item">
      <div>{notebook.title}</div>
    </li>
  );
};

export default Notebook;
