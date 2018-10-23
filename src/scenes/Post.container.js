import { connect } from 'react-redux';
import PostComponent from './Post';
import * as GITHUB_ACTIONS from '../redux/github.actions';

const mapStateToProps = state => (
  {
    readmeContent: state.gitHubReducer.readmeContent
  }
);

const mapDispatchToProps = dispatch => (
  {
    getReadmeContent: (repoName) => {
      dispatch(GITHUB_ACTIONS.getReadmeContent(repoName));
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PostComponent);
