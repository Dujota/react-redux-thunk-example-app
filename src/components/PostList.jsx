import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends PureComponent {
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  render() {
    console.log(this.props.posts);
    return (
      <div>
        Post List
      </div>
    );
  }
}

// every time reducers runs it will return a new piece of state that will show up in our component through this map state to props
const mapStateToProps = state => ({ posts: state.posts });

// First argument is always mapstatetoprops, action creaters
export default connect(mapStateToProps, { fetchPosts })(PostList);
