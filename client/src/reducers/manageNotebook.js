import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageNotebooks(state = {notebooks: [], notes: []}, action) {
  switch (action.type) {
    case 'ADD_NOTEBOOK':
      const notebook = { title: action.notebook.title, id: cuidFn() };
      return Object.assign({}, state, { notebooks: state.notebooks.concat(notebook) });
    case 'ADD_NOTE':
      const note = Object.assign({}, action.note, {id: cuidFn()} );
      return Object.assign({}, state, { note: state.notes.concat(note)})
    default:
      return state;
  }
}
