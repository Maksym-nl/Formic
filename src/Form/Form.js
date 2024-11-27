import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    lastname: "",
    expirients: "junior",
    licence: false,
  };
  handleNameChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  handleLicenceChange = (event) => {
    console.log(event.currentTarget.checked);
  };
  reset = () => {
    this.setState({ name: " ", lastname: " " });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:{" "}
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
          <label>
            Lastname:{" "}
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleNameChange}
            />
          </label>
          <p>Ваш уроыень:</p>
          <label htmlFor="">
            <input
              type="radio"
              value="junior"
              onChange={this.handleNameChange}
              checked={this.state.expirients === "junior"}
            />
            Junior
          </label>
          <label htmlFor="">
            <input
              type="radio"
              value="midle"
              onChange={this.handleNameChange}
              checked={this.state.expirients === "midle"}
            />
            Midle
          </label>
          <label htmlFor="">
            <input
              type="radio"
              value="senior"
              onChange={this.handleNameChange}
              checked={this.state.expirients === "senior"}
            />
            Senior
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="licence"
              checked={this.state.checked}
              onChange={this.handleLicenceChange}
            />
            Согласен с условием
          </label>
          <button type="submit" disabled={!this.state.licence}>
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default Form;
