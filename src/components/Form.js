import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';

const Form = ({ onChange, onSubmit }) => (
  <form className={styles.Form} onSubmit={onSubmit}>
    <div className={styles.historyContainer}>
      <h2>History</h2>
      <ul></ul>
    </div>
    <div>
      <input type="text" placeholder="URL" />
      <section className={styles.methods}>
        <label>
          <input type="radio" name="method" value="get"></input>
          <span>GET</span>
        </label>
        <label>
          <input type="radio" name="method" value="post"></input>
          <span>POST</span>
        </label>
        <label>
          <input type="radio" name="method" value="put"></input>
          <span>PUT</span>
        </label>
        <label>
          <input type="radio" name="method" value="patch"></input>
          <span>PATCH</span>
        </label>
        <label>
          <input type="radio" name="method" value="delete"></input>
          <span>DELETE</span>
        </label>
        <button>Go!</button>
      </section>
      <textarea onChange={onChange} name="rawJSON" rows="9" cols="40" placeholder="Raw JSON Body" />
    </div>
  </form>
);

Form.propTypes = {
  // onSubmit: PropTypes.func.isRequired
  onChange: PropTypes.func
};

export default Form;
