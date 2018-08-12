import React, { Component } from "react";
import Ingredient from "./Ingredient";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktailProportions: ""
    };
  }

  componentDidMount() {
    fetch(
      `http://localhost:3000/api/v1/cocktails/${this.props.currentCocktail.id}`
    )
      .then(response => response.json())
      .then(jsonData => {
        this.setState({
          cocktailProportions: jsonData
        });
      });
  }

  render() {
    let ingredientProportions = null;
    if (this.state.cocktailProportions !== "") {
      ingredientProportions = this.state.cocktailProportions.proportions.map(
        (ingredient, index) => {
          return <Ingredient key={ingredient.id} ingredient={ingredient} />;
        }
      );
    }
    console.log(
      "this.state.cocktailProportions",
      this.state.cocktailProportions
    );
    console.log("ingredientProportions", ingredientProportions);

    return (
      <div>
        <h2> {this.props.currentCocktail.name}</h2>
        <p> Description: {this.props.currentCocktail.description}</p>
        <p> Instructions: {this.props.currentCocktail.instructions}</p>

        <ul>{ingredientProportions}</ul>
      </div>
    );
  }
}
