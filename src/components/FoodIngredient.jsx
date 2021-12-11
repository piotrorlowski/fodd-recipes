function FoodIngredient(props) {
  const { ingredient } = props;
  return <li className="FoodIngredient-li">{ingredient.text}</li>;
}

export default FoodIngredient;