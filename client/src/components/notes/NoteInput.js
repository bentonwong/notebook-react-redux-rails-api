import React, { Component } from 'react';
import Notes from './Notes';

class NoteInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    }
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_NOTE',
      note: {
        title: this.state.title,
        body: this.state.body,
        notebookId: this.props.notebookId,
      },
    });
    this.setState({
      title: '',
      body: ''
    })
  }

  render() {
    return (
      <form>
        <Notes store={this.props.store} notebookId={this.props.notebookId} />
        <label>Add note</label>
        <input type="text" value={this.state.title} onChange={(event) => this.handleOnChangeTitle(event)} />
        <input type="text" value={this.state.body} onChange={(event) => this.handleOnChangeBody(event)} />
        <input type="submit" />
      </form>
    )
  }
}

export default NoteInput;
