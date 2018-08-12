import React, { Component } from "react";

export default class Cocktail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktail: ""
    };
  }

  componentDidMount() {
    this.setState({
      cocktail: this.props.cocktail
    });
  }

  render() {
    return (
      <a href="#" onClick={this.props.handleClick}>
        <li id={this.state.cocktail.id} key={this.state.cocktail.id}>
          {this.state.cocktail.name}
        </li>
      </a>
    );
  }
}
