import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export default class PostEditor extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
  }

  onTextareaChange(e) {
    this.setState({ text: e.target.value});
  }

  onTextareaSave() {
    this.props.onSave(this.refs.text.value);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div className="post-editor">
        <TextareaAutosize
          className="form-control"
          minRows={1}
          maxRows={3}
          placeholder="請輸入內容..."
          value={this.state.text}
          onChange={this.onTextareaChange.bind(this)}
          ref="text"
            />
        <div className="clearfix">
          <button className="btn btn-default" onClick={this.onTextareaSave.bind(this)}>送出</button>
        </div>
      </div>
    );
  }
}
