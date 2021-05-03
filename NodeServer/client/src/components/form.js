import React, { Component } from "react";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";

class form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <form method="POST">
        <div>
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input name="password" type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
        </div>
        <div>
          <input type="submit"/>
        </div>
      </form>
    );
  }
}

export default form;
