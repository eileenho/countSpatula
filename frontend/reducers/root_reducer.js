import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RecipesReducer from './recipes_reducer';
import NotesReducer from './notes_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  recipes: RecipesReducer,
  notes: NotesReducer
});

export default rootReducer;
