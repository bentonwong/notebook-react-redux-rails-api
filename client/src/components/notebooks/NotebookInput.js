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
  }

  handleOnSubmit(event) {
    event.preventDefault();
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
