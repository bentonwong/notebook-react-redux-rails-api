import React from 'react';

const Notebook = ({notebook}) => {
  return (
    <div>
      <li>{notebook.title}</li>
    </div>
  );
};

export default Notebook;
