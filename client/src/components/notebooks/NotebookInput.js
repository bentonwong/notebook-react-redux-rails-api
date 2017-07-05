import React, { Component } from 'react';

class NotebookInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    }
  }

  handleOnChange(event) {
    this.setState({
      title: event.target.value,
    })
    console.log(event.target.value)
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_NOTEBOOK',
      notebook: {
        title: this.state.title
      },
    });
    this.setState({
      title: '',
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" value={this.state.title} onChange={(event) => this.handleOnChange(event)}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default NotebookInput;
