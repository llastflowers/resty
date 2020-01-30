import React from 'react';
import PropTypes from 'prop-types';
// import styles from '../App.css';

const Form = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" placeholder="URL" />
    <label>
      <input type="radio" value="get"></input>
      <span>GET</span>
    </label>
    <label>
      <input type="radio" value="post"></input>
      <span>POST</span>
    </label>
    <label>
      <input type="radio" value="put"></input>
      <span>PUT</span>
    </label>
    <label>
      <input type="radio" value="patch"></input>
      <span>PATCH</span>
    </label>
    <label>
      <input type="radio" value="delete"></input>
      <span>DELETE</span>
    </label>
    <section>
      <button>Go!</button>
      <button type="reset">Clear</button>
    </section>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Form;
