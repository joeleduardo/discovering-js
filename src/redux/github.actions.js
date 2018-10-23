import Axios from 'axios';

const gitHubAPI = 'https://api.github.com';

const headers = {
  'Authorization': `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  'accept': 'application/vnd.github.VERSION.raw'
}

export const GET_README_CONTENT = 'GET_README_CONTENT';
const setReadmeContent = data => (
  {
    type: GET_README_CONTENT,
    readmeContent: data
  }
);

export const getReadmeContent = (repoName) => (
  dispatch => (
    Axios.get(`${gitHubAPI}/repos/joeleduardo/${repoName}/readme`, {headers})
      .then((response) => {
        dispatch(setReadmeContent(response.data));
      })
      .catch((error) => {
        console.log(error);
      })
  )
)