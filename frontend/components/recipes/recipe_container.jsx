import { connect } from 'react-redux';
import Recipe from './recipe';
import { requestRecipe, deleteRecipe } from '../../actions/recipe_actions';
import { requestNotes } from '../../actions/note_actions';
import { requestRecipeTags } from '../../actions/tag_actions';

const mapStateToProps = ( state, {params}) => ({
  recipeId: params.id,
  recipe: state.recipes[params.id],
  tags: state.tags
});

const mapDispatchToProps = dispatch => ({
  requestRecipe: (id) => dispatch(requestRecipe(id)),
  deleteRecipe: (id) => dispatch(deleteRecipe(id)),
  requestNotes: (id) => dispatch(requestNotes(id)),
  requestRecipeTags: (id) => dispatch(requestRecipeTags(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
