import { connect } from 'react-redux';
import { createRecipe } from '../../actions/recipe_actions';
import RecipeForm from './recipe_form';

const mapStateToProps = (state) => ({
  userId: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  createRecipe: (recipe) => dispatch(createRecipe(recipe))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(RecipeForm);
