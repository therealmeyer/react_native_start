import React, { Component } from 'react';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      email: '', 
      password: '',
      loading: false
    };
  }

  onButtonPress() {
    this.setState({ loading: true });
  }

  // onLoginSuccess() {
  //   this.setState({
  //     email: '',
  //     password: '',
  //     loading: false,
  //     error: ''
  //   });
  // }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small"/>;
    } else {
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
            Log in 
        </Button>
      );
    }
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input 
            placeholder="user@gmail.com"
            secure={false}
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input 
            placeholder="password"
            secure={true}
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>
    </Card>
    );
  }
}

export default LoginForm;