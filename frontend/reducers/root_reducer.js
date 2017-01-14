import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RecipesReducer from './recipes_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  recipes: RecipesReducer
});

export default rootReducer;
