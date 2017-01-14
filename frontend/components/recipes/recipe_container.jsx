import { connect } from 'react-redux';
import Recipe from './recipe';
import { requestRecipe } from '../../actions/recipe_actions';

const mapStateToProps = ( state, {params}) => ({
  recipe: state.recipes[params.id]
});

const mapDispatchToProps = dispatch => ({
  requestRecipe: (id) => dispatch(requestRecipe(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
