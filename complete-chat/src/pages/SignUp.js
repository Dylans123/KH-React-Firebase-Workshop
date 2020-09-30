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
      <>
        <form onSubmit={this.handleSubmit} style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Card elevation={24} className="elevation-24" style={{ width: '50vh' }}>
            <CardContent>
              <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
              {error &&
                <div style={{ color: 'red' }}>
                  Error: {error}
                </div>
              }
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  className="form-control form-control-lg"
                  name="email"
                  type="email"
                  value={email}
                  onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input
                  className="form-control form-control-lg"
                  name="password"
                  type="password"
                  value={password}
                  onChange={this.handleChange}/>
              </div>
              <button type="submit" class="btn btn-primary btn-lg btn-block my-1">Register</button>
              <Link to='/login'>Already have an account? Login!</Link>
            </CardContent>
          </Card>
        </form>
      </>
    )
  }
}

export default SignUp;