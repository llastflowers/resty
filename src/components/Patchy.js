import React, { Component } from 'react';
import Form from './Form.js';

export default class Patchy extends Component{
  state = {
    URL: '',
    method: '',
    rawJSON: '',
    response: '',
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  handleSubmit = event => {
    event.preventDefault();
    fetch(this.state.URL)
      .then(res => {
        console.log(res.body);
        return res.json();
      });
  }

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
