import React, { Component } from 'react';
import Form from './Form.js';

export default class Patchy extends Component{
  state = {
    URL: '',
    method: '',
    rawJSON: '',
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  handleSubmit = event => {
    event.preventDefault();
    fetch(this.state.URL);
    //get response and do something with it
    //console log response
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
