import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, CardSection, Input, Button, Spinner } from "./common";
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

  // Login
  onButtonPress = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  };

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return <Button onPress={this.onButtonPress}>Login</Button>;
  };

  // Error handling of login
  renderError = () => {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: "white" }}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  };

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

        {/*  Error */}
        {this.renderError()}

        {/* // Login Button //  */}
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

const mapStateStateToProps = state => {
  return {
    // auth from reducer and email from authreducers
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(
  mapStateStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);
