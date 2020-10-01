import React, { Component } from 'react';
import { Card, CardContent } from '@material-ui/core';
import { signin } from '../helpers/auth';
import { Link } from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: '' });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const { email, password, error } = this.state;

    return (
      // Lets write some code!!!
    )
  }
}

export default Login;