import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';

const Form = ({ onSubmit }) => (
  <form className={styles.Form} onSubmit={onSubmit}>
    <div className={styles.historyContainer}>
      <h2>History</h2>
      <ul></ul>
    </div>
    <div>
      <input type="text" placeholder="URL" />
      <section className={styles.methods}>
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
        <button>Go!</button>
      </section>
      <textarea rows="9" cols="40" placeholder="Raw JSON Body" />
      <div className={styles.responseField}>
        
      </div>
    </div>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Form;
