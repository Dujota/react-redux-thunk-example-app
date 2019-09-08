import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends PureComponent {
  render() {
    return (
      <div>
        Post List
      </div>
    );
  }
}

// First argument is always mapstatetoprops, action creaters
export default connect(null, { fetchPosts })(PostList);
