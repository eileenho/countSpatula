import { connect } from 'react-redux';
import Recipe from './recipe';
import { requestRecipe, deleteRecipe } from '../../actions/recipe_actions';

const mapStateToProps = ( state, {params}) => ({
  recipeId: params.id,
  recipe: state.recipes[params.id]
});

const mapDispatchToProps = dispatch => ({
  requestRecipe: (id) => dispatch(requestRecipe(id)),
  deleteRecipe: (id) => dispatch(deleteRecipe(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
