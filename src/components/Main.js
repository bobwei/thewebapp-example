require('normalize.css');
require('bootstrap/dist/css/bootstrap.css');
require('styles/App.scss');

import React from 'react';

import PostList from './PostList';
import PostEditor from './PostEditor';

class AppComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      postList: [{
        text: '賴清德拒赴議會　公懲會申誡處分'
      }, {
        text: '新北欠北市補貼款8千萬 柯P：再不還，就告他！'
      }]
    };
  }

  onSave(text) {
    let postList = this.state.postList.slice();
    postList.unshift({
      text: text
    });
    this.setState({ postList: postList });
  }

  render() {
    return (
      <div>
        <PostEditor onSave={this.onSave.bind(this)}/>
        <PostList postList={this.state.postList}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
