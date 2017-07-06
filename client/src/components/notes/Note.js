import React from 'react';

const Note = ({note}) => {
  return (
    <div>
      <li>{note.title}</li>
      <li>{note.body}</li>
    </div>
  )
}

export default Note;
