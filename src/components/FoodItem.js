import React from "react";

function FoodItem(props){
  return (
    <li className="food-item">{props.foodName}</li>
  );
}

export default FoodItem;