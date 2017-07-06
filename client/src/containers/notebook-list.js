import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotebookList extends Component {
  renderList() {
    return this.props.notebooks.map((notebook) => {
      return <li key={notebook.id}>notebook.title</li>
    })
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    notebooks: state.notebooks
  }
}

export default connect(mapStateToProps)(NotebookList)
