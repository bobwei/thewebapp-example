import React from 'react';

import PostListItem from './PostListItem';

export default class PostList extends React.Component {

  render() {
    return (
      <div className="list">
        {this.props.postList.map((post, i) => {
          return (<PostListItem key={i} post={post}/>);
        })}
      </div>
    );
  }
}
