import React, { Component } from 'react';
import NoteInput from '../notes/NoteInput'

class Notebook extends Component {
  render() {
    return (
      <div>
        <li>{this.props.notebook}
          <NoteInput store={this.props.store} notebookId={this.props.notebook} />
        </li>
      </div>
    );
  }
};

export default Notebook;
