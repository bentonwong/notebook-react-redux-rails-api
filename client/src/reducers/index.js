import { combineReducers } from 'redux';
import NotebooksReducer from './reducer_notebooks'

const rootReducer = combineReducers({
  notebooks: NotebooksReducer
})

export default rootReducer
