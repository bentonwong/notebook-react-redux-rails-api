import React from 'react';
import NoteInput from '../notes/NoteInput'

const Notebook = (props) => {
  return (
    <div>
      <li>{props.title}
        <NoteInput store={props.store} notebookId={props.id} />
      </li>
    </div>
  );
};

export default Notebook;
