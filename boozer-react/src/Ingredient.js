import React from "react";

export default function Ingredient(props) {
  return (
    <li>
      {props.ingredient.amount} of {props.ingredient.ingredient_name}
    </li>
  );
}
