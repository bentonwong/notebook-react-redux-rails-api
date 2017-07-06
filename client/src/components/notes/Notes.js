import React, {Component} from 'react';
import Note from './Note';

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    };
  };

  componentDidMount() {
    console.log("id: ", this.props.notebook.id)
    fetch('http://localhost:3000/notebooks/' + this.props.notebook.id + '/notes.json')
      .then(resp => resp.json())
        .then(data => {
          this.setState({notes: data});
        });
  }

  render() {
    const noteList = this.state.notes.map((note) => {
      return <Note note={note} key={note.id} />
    })
    return (
      <div>
        <ul>
          {noteList}
        </ul>
      </div>
    )
  }

}

export default Notes;
