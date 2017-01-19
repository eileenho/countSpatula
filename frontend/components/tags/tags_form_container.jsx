import { connect } from 'react-redux';
import { createTag, deleteTagging } from '../../actions/tag_actions';
import TagsForm from './tags_form';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({
  createTag: (tag) => dispatch(createTag(tag)),
  deleteTagging: (tag, recipeId) => dispatch(deleteTagging(tag, recipeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TagsForm);
