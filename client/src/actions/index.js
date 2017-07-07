export function selectNotebook(notebook) {
  return {
    type: 'SELECT_NOTEBOOK',
    payload: notebook
  };
}
