import { combineReducers } from 'redux';
import NotebooksReducer from './reducer_notebooks'
import ActiveNotebook from './reducer_active_notebook'

const rootReducer = combineReducers({
  notebooks: NotebooksReducer,
  activeNotebook: ActiveNotebook
})

export default rootReducer
