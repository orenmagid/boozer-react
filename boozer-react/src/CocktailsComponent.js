import React, { Component } from "react";
import Cocktail from "./Cocktail";
import Details from "./Details";

export default class CocktailsComponent extends Component {
  static defaultProps = {};

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      cocktails: [],
      currentCocktail: ""
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/cocktails`)
      .then(response => response.json())
      .then(jsonData =>
        this.setState({
          cocktails: jsonData
        })
      );
  }

  handleClick = e => {
    let currentCocktail = this.state.cocktails.find(cocktail => {
      return cocktail.id == e.target.id;
    });
    this.setState({
      currentCocktail: currentCocktail
    });
  };

  render() {
    let details;
    let allCocktails = this.state.cocktails.map(cocktail => {
      return (
        <Cocktail
          handleClick={this.handleClick}
          key={cocktail.id}
          cocktail={cocktail}
        />
      );
    });
    return (
      // <div className="ui grid">
      //   <div className="four wide column">1</div>
      //   <div className="four wide column">2</div>
      //   <div className="four wide column">3</div>
      //   <div className="four wide column">4</div>
      // </div>
      <div className="ui two column doubling stackable grid container">
        <div className="ui column">
          <ul>{allCocktails}</ul>
        </div>
        <div className="ui column">
          {this.state.currentCocktail ? (
            <Details currentCocktail={this.state.currentCocktail} />
          ) : null}
        </div>
      </div>
    );
  }
}
