import React from 'react';
import PropTypes from 'prop-types';

const CommentForm = props => (
  <form onSubmit={props.submitComment}>
    <input
      type="text"
      name="user"
      placeholder="Your name…"
      value={props.user}
      onChange={props.handleChangeText}
    />
    <input
      type="text"
      name="text"
      placeholder="Say something..."
      value={props.text}
      onChange={props.handleChangeText}
    />
    <button type="submit">Submit</button>
  </form>
);

CommentForm.propTypes = {
  submitComment: PropTypes.func.isRequired,
  handleChangeText: PropTypes.func.isRequired,
  text: PropTypes.string,
  user: PropTypes.string,
};

CommentForm.defaultProps = {
  text: '',
  user: '',
};

export default CommentForm;
