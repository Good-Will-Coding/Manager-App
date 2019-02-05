import React, { Component } from "react";
import { Card, CardSection, Input, Button } from "./common";
import { connect } from "react-redux";
import { emailChanged } from "../actions";

class LoginForm extends Component {

    // EMAIL INPUT
  onEmailChange = text => {
    this.props.onEmailChange(text);
  };
  
  render() {
    return (
      <Card>
        // Login Form //
        <CardSection>
          // Email //
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>
        // Password //
        <CardSection>
          <Input secureTextEntry label="Password" placeholder="password" />
        </CardSection>
        // Login Button //
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateStateToProps = state => {
  return {
      // auth from reducer and email from authreducers
    email: state.auth.email
  };
};

export default connect(
  mapStateStateToProps,
  { emailChanged }
)(LoginForm);
