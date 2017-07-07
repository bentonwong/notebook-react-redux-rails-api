import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectNotebook } from '../actions/index'
import { bindActionCreators } from 'redux'

class NotebookList extends Component {
  renderList() {
    return this.props.notebooks.map((notebook) => {
      return (
      <li
        onClick={() => this.props.selectNotebook(notebook)}
        className="list-group-item"
        key={notebook.id}>
        {notebook.title}
      </li>
    );
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    notebooks: state.notebooks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectNotebook: selectNotebook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NotebookList);
