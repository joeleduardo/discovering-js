import { GET_README_CONTENT } from './github.actions';

const initialState = {
  readmeContent: ''
};

const gitHubReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_README_CONTENT:
      return {...state, readmeContent: action.readmeContent}
    default:
      return state;
  }
};

export default gitHubReducer;