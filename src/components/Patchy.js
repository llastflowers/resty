import React, { Component } from 'react';
import Form from './Form.js';

export default class Patchy extends Component{
  state = {
    URL: '',
    rawJSON: '',
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  // handleSubmit = event => {
  //   event.preventDefault();

  // }

  render() {
    return (
      <>
        {<Form
          onChange={this.handleChange}
        />}
      </>
    );
  }
}
