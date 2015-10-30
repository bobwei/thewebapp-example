require('normalize.css');
require('styles/App.css');

import React from 'react';

import PostList from './PostList';

class AppComponent extends React.Component {
  render() {
    let postList = [{
      text: '賴清德拒赴議會　公懲會申誡處分'
    }, {
      text: '新北欠北市補貼款8千萬 柯P：再不還，就告他！'
    }];
    return (
      <div className="test">
        <PostList postList={postList}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
