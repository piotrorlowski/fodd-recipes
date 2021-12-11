function FoodListElement(props) {
  const { ingredient, onButtonClick } = props;
  return (
    <li className="FoodListElement-li">
      {ingredient}
      <button id={ingredient} onClick={onButtonClick} className="FoodListElement-deleteBtn">
        x
      </button>
    </li>
  );
}

export default FoodListElement;