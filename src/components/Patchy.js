import React, { Component } from 'react';
import Form from './Form.js';
import Response from './Response';

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
    let body;
    if(this.state.method === 'POST' || this.state.method === 'PUT' || this.state.method === 'PATCH') {
      body = this.state.rawJSON;
    }
    fetch(this.state.URL, {
      method: this.state.method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
      .then(res => {
        return res.json();
      })
      .then(response => {
        this.setState({ response: JSON.stringify(response, null, 2) });
      });
  }

  render() {
    return (
      <>
        {<Form
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />}
        <Response response={this.state.response} />
      </>
    );
  }
}
