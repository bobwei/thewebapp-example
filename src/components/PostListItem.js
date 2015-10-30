import React from 'react';

export default class PostListItem extends React.Component {
  render() {
    return (
      <div className="list-item">
        {this.props.post.text}
      </div>
    );
  }
}
