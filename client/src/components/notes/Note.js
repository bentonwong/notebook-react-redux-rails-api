import React, { Component } from 'react';

class Note extends Component {
  render() {
    return (
      <div>
        <li>{this.props.note.title}</li>
      </div>
    )
  }
}
