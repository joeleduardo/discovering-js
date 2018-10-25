import React from 'react';
import PropTypes  from 'prop-types';
import Markdown from 'react-markdown';
import './Post.css';
import '../assets/github-markdown.css';

class Post extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      readmeContent: props.readmeContent
    }
  }

  componentDidMount () {
    this.props.getReadmeContent('apdex-board');
  }

  componentDidUpdate(prevProps) {
    if (this.props.readmeContent !== prevProps.readmeContent) {
      this.setState({
        readmeContent: this.props.readmeContent
      })
    }
  }

  render() {
    return(
      <article>
        <figure>
          <img width='100%' height='350px' alt='Main'/>
        </figure>
        <section role='main'>
          <aside>
            <ul>
              <li>Facebook</li>
            </ul>
          </aside>
          <article role='contentinfo' className='markdown-body'>
            <Markdown source={this.state.readmeContent}/>
          </article>
        </section>
      </article>
    )
  }
}

Post.propTypes = {
  readmeContent: PropTypes.string,
  getReadmeContent: PropTypes.func
}

Post.defaultProps = {
  readmeContent: '',
  getReadmeContent: () => {}
}

export default Post;