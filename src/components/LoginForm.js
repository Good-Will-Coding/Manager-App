import React, { Component } from "react";
import { Card, CardSection, Input, Button } from "./common";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions";

class LoginForm extends Component {
  // EMAIL INPUT
  onEmailChange = text => {
    this.props.emailChanged(text);
  };

  // PASSWORD INPUT
  onPassWordChange = text => {
    this.props.passwordChanged(text);
  };

  onButtonPress = () => {
      const { email, password } = this.props;
      this.props.loginUser({ email, password });
  }

  render() {
    return (
      <Card>
        <CardSection>
          {/* // Email // */}

          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          {/* // Password // */}

          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPassWordChange}
            value={this.props.password}
          />
        </CardSection>

        {   /* // Login Button //  */}
        <CardSection>
          <Button onPress={this.onButtonPress}>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateStateToProps = state => {
  return {
    // auth from reducer and email from authreducers
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(
  mapStateStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);
