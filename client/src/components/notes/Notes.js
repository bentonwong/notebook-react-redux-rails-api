import React, { Component } from 'react';
import Note from './Note';

class Notes extends Component {
  render() {
    const notebookNotes = this.props.store.getState().notes.filter(note => note.notebookId === this.props.notebookId);
    const notes = notebookNotes.map((note, index) => {
      return <Note store={this.props.store} key={index} note={note}/>
    })
    return (
      <ul>
        {notes}
      </ul>
    )
  }
}
