import React, { Component } from 'react';
import { Card, CardContent } from '@material-ui/core';
import { signup } from '../helpers/auth';
import { Link } from 'react-router-dom';

class SignUp extends Component {

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
      await signup(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const { email, password, error } = this.state;

    return (
      // Lets write some more code!!!
    )
  }
}

export default SignUp;