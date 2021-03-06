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

  handleOnChangeTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleOnChangeBody(event) {
    this.setState({
      body: event.target.value,
    });
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
        <label>Add note</label><br />
        <input type="text" value={this.state.title} placeholder="title" onChange={(event) => this.handleOnChangeTitle(event)} /><br />
        <input type="text" value={this.state.body} placeholder="body" onChange={(event) => this.handleOnChangeBody(event)} />
        <input type="submit" />
      </form>
    )
  }
}

export default NoteInput;
