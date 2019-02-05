import React, { Component } from "react";
import { Card, CardSection, Input, Button } from "./common";

class LoginForm extends Component {
    onEmailChange = text => {
        
    }
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

export default LoginForm;
