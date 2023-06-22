import React, { Component, ChangeEvent, FormEvent } from "react";

interface State {
  email: string;
  password: string;
  check_textInputChange: boolean;
  secureTextEntry: boolean;
}

export default class Signin extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      password: "",
      check_textInputChange: false,
      secureTextEntry: true,
    };
  }

  InsertRecord = () => {
    var Email = this.state.email;
    var Password = this.state.password;

    if (Email.length === 0 || Password.length === 0) {
      alert("Required Field Is Missing!!!");
    } else {
      var APIURL = "http://aussiegalleri.se/api/admin/login.php";

      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      var Data = {
        Email: Email,
        Password: Password,
      };

      fetch(APIURL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((Response) => Response.json())
        .then((Response) => {
          alert(Response[0].Message);
          if (Response[0].Message === "Success") {
            console.log("true");
          }
          console.log(Data);
        })
        .catch((error) => {
          console.error("ERROR FOUND" + error);
        });
    }
  };

  updateSecureTextEntry = () => {
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry,
    });
  };

  handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.InsertRecord();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />

        <button type="submit">Logga in</button>
      </form>
    );
  }
}
