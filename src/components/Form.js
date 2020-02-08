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
      <input type="text" onChange={onChange} name="URL" placeholder="URL" />
      <section className={styles.methods}>
        <label>
          <input type="radio" onChange={onChange} name="method" value="GET"></input>
          <span>GET</span>
        </label>
        <label>
          <input type="radio" onChange={onChange} name="method" value="POST"></input>
          <span>POST</span>
        </label>
        <label>
          <input type="radio" onChange={onChange} name="method" value="PUT"></input>
          <span>PUT</span>
        </label>
        <label>
          <input type="radio" onChange={onChange} name="method" value="PATCH"></input>
          <span>PATCH</span>
        </label>
        <label>
          <input type="radio" onChange={onChange} name="method" value="DELETE"></input>
          <span>DELETE</span>
        </label>
        <button>Go!</button>
      </section>
      <textarea onChange={onChange} name="rawJSON" rows="9" cols="40" placeholder="Raw JSON Body" />
    </div>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func
};

export default Form;
