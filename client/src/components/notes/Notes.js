import React, {Component} from 'react';
import Note from './Note';
import NoteInput from './NoteInput';

class Notes extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  };

  componentDidMount() {
    fetch('http://localhost:3000/notebooks/' + this.props.notebook.id + '/notes.json')
      .then(resp => resp.json())
        .then(data => {
          this.setState({notes: data});
        });
  }

  render() {
    const notesList = this.state.notes.map((note) => {
      return <Note note={note} key={note.id} />
    })
    return (
      <div>
        <ul>
          {notesList}
          <NoteInput />
        </ul>
      </div>
    )
  }

}

export default Notes;
