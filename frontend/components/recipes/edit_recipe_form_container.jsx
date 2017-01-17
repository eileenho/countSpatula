import { connect } from 'react-redux';
import { requestRecipe, updateRecipe } from '../../actions/recipe_actions';
import EditRecipeForm from './edit_recipe_form';

const mapStateToProps = (state, { params }) => ({
  recipe: state.recipes[params.id]
});

const mapDispatchToProps = dispatch => ({
  requestRecipe: (id) => dispatch(requestRecipe(id)),
  updateRecipe: (recipe) => dispatch(updateRecipe(recipe))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(EditRecipeForm);
