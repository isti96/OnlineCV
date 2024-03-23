import { Component } from "react";
import Button from "@material-ui/core/Button";
import "./ContactForm.css";

export class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    isInvalidName: false,
    isInvalidEmail: false,
    isInvalidMessage: false,
    isValid: false,
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value, isInvalidName: false });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value, isInvalidEmail: false });
  };

  handleMessageChange = (event) => {
    this.setState({ message: event.target.value, isInvalidMessage: false });
  };

  handleAll = () => {
    if (this.state.name === "") {
      this.setState({ isInvalidName: true });
    } else {
      this.setState({ isInvalidName: false });
    }

    if (this.state.email === "") {
      this.setState({ isInvalidEmail: true });
    } else {
      this.setState({ isInvalidEmail: false });
    }

    if (this.state.message === "") {
      this.setState({ isInvalidMessage: true });
    } else {
      this.setState({ isInvalidMessage: false });
    }
    if (this.state.name && this.state.email && this.state.message) {
      this.setState({ isValid: true });
    } else {
      this.setState({ isValid: false });
    }
  };

  onClick = () => {
    this.setState({ isValid: false });
  };

  render() {
    return (
      <div id="contact-form">
        <input
          label="Name"
          className="inputname"
          placeholder="Type name"
          style={{
            border: this.state.isInvalidName ? "1px solid red" : undefined,
            fontFamily: "DM Sans",
          }}
          variant="outlined"
          onChange={this.handleNameChange}
        />
        <input
          label="E-mail"
          className="inputemail"
          placeholder="Type e-mail"
          style={{
            border: this.state.isInvalidEmail ? "1px solid red" : undefined,
            fontFamily: "DM Sans",
          }}
          variant="outlined"
          onChange={this.handleEmailChange}
        />
        <textarea
          label="Message"
          multiline="true"
          rows={4}
          placeholder="Type a message"
          className="inputmessage"
          style={{
            border: this.state.isInvalidMessage ? "1px solid red" : undefined,
            fontFamily: "DM Sans",
          }}
          onChange={this.handleMessageChange}
        />
        <Button
          size="small"
          color="primary"
          type="submit"
          value="Send"
          variant="contained"
          onClick={this.handleAll}
        >
          {" "}
          Submit{" "}
        </Button>
        <div
          className="message-sent"
          style={{
            display: this.state.isValid ? "flex" : "none",
          }}
        >
          <button id="message-button" onClick={this.onClick}>
            x
          </button>
          <p>Message sent!</p>
        </div>
      </div>
    );
  }
}
