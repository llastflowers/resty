import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';

const Response = ({ response }) => (
  <>
    <div className={styles.responseField}>
      <p>{response}</p>
    </div>
  </>
);

Response.propTypes = {
  response: PropTypes.string.isRequired,
};

export default Response;
