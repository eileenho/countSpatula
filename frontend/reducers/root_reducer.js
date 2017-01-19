import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RecipesReducer from './recipes_reducer';
import NotesReducer from './notes_reducer';
import TagsReducer from './tags_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  recipes: RecipesReducer,
  notes: NotesReducer,
  tags: TagsReducer
});

export default rootReducer;
