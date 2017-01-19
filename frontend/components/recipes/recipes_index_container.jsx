import { connect } from 'react-redux';
import RecipeIndex from './recipes_index';
import { requestAllRecipes } from '../../actions/recipe_actions';
import { selectAllRecipes } from '../../reducers/selectors';

const mapStateToProps = state => ({
  recipes: selectAllRecipes(state),
});

const mapDispatchToProps = dispatch => ({
  requestAllRecipes: () => dispatch(requestAllRecipes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeIndex);
