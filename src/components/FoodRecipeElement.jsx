import FoodIngredient from "./FoodIngredient";

function FoodRecipeElement(props) {
  const { recipe } = props;
  
  function renderIngredients() {
    return recipe.ingredients.map(function (ingredient, index) {
      return <FoodIngredient key={`${ingredient}-${index}`} ingredient={ingredient} />;
    });
  }

  return (
    <div className="FoodRecipeElement">
      <p className="FoodRecipeElement-p">{recipe.label}</p>
      <img className="FoodRecipeElement-img" src={recipe.image} alt={recipe.label}/>
      <p className="FoodRecipeElement-p">Ingredients:</p>
      <ul className="FoodRecipeElement-ul">
        {renderIngredients()}
      </ul>
    </div>
  );
}

export default FoodRecipeElement;