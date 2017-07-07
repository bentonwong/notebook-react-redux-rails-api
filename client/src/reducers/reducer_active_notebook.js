export default function (state = null, action) {
  switch(action.type) {
    case 'SELECT_NOTEBOOK':
      return action.payload;
  }

  return state;
}
