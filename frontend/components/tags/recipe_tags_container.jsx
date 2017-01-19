import { connect } from 'react-redux';
import RecipeTags from './recipe_tags';
import { requestRecipeTags, deleteTag } from '../../actions/tag_actions';
import { tagsArray } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  tags: tagsArray(state)
});

const mapDispatchToProps = dispatch => ({
  requestRecipeTags: (id) => dispatch(requestRecipeTags(id)),
  deleteTag: id => dispatch(deleteTag(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeTags);
