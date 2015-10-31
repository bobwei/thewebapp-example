require('normalize.css');
require('bootstrap/dist/css/bootstrap.css');
require('styles/App.scss');

import React from 'react';
import { connect } from 'react-redux';

import * as postListActions from '../actions/postList';

import PostList from './PostList';
import PostEditor from './PostEditor';

class AppComponent extends React.Component {

  onSave(text) {
    const { dispatch } = this.props;
    dispatch(postListActions.addPost(text));
  }

  render() {
    const { postList } = this.props;
    return (
      <div>
        <PostEditor onSave={this.onSave.bind(this)}/>
        <PostList postList={postList}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

const mapStateToProps = function(state) {
  return {
    postList: state.postList
  };
};

export default connect(mapStateToProps)(AppComponent)
