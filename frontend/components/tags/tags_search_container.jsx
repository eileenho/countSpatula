import { connect } from 'react-redux';
import TagsSearch from './tags_search';
import { searchTags } from '../../actions/tag_actions';
// import _ from 'lodash';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  searchTags: query => dispatch(searchTags(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(TagsSearch);
