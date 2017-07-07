const FETCH_NOTEBOOKS = 'FETCH_NOTEBOOKS';
const NOTEBOOKS_URL = 'http://localhost:3000/notebooks.json';

export function selectNotebook(notebook) {
  return {
    type: 'SELECT_NOTEBOOK',
    payload: notebook
  };
}

export function fetchNotebooks() {
  const NOTEBOOKS_URL = 'http://localhost:3000/notebooks.json';
  return (dispatch) => {
    return fetch(NOTEBOOKS_URL)
      .then(response => response.json())
      .then(notebooks => dispatch({
        type: 'ADD_NOTEBOOKS',
        notebooks
      }));
  }
}
