import React from 'react';

export default class PostListItem extends React.Component {
  render() {
    return (
      <div>
        {this.props.post.text}
      </div>
    );
  }
}
