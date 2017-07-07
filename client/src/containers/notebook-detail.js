import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotebookDetail extends Component {
  render() {
    if (!this.props.notebook) {
      return <div>Select a notebook to on the left</div>
    }
    const notes = this.props.notebook.notes.map(note => {
      return <div><h4>{note.title}</h4><p>{note.body}</p></div>
    })
    return (
      <div>
        <div><h3>{this.props.notebook.title}</h3></div>
        <hr />
        <div>{notes}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notebook: state.activeNotebook
  };
}

export default connect(mapStateToProps)(NotebookDetail);
