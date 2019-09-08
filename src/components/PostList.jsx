import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends PureComponent {
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

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
