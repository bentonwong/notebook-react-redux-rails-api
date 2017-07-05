import React, { Component } from 'react';
import NoteInput from '../notes/NoteInput'

class Notebook extends Component {
  render() {
    return {
      <div>
        <li>{this.props.notebook.title}
          <NoteInput store={this.props.store} notebookId={this.props.notebook.id}
        </li>
      </div>
    }
  }
}

export default Notebook;
