import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = ({ recipes }) => ({
  recipes
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Profile);
