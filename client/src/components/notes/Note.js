import React from 'react';

const Note = ({note}) => {
  return (
    <div>
      <li>
        <h4>{note.title}</h4>
        <p>{note.body}</p>
      </li>
    </div>
  )
}

export default Note;
