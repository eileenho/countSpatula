import { connect } from 'react-redux';
import TagsSearch from './tags_search';
import { searchTags, requestRecipesByTag } from '../../actions/tag_actions';
import { requestAllRecipes } from '../../actions/recipe_actions';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  searchTags: query => dispatch(searchTags(query)),
  requestRecipesByTag: id => dispatch(requestRecipesByTag(id)),
  requestAllRecipes: () => dispatch(requestAllRecipes())
});

export default connect(mapStateToProps, mapDispatchToProps)(TagsSearch);
