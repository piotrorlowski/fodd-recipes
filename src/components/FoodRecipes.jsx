import FoodRecipeElement from "./FoodRecipeElement";

function FoodRecipes(props) {
  const { recipes } = props;
  
  function renderFoodRecipes() {
    return recipes.map(function (item, index) {
      return <FoodRecipeElement key={`recipe-${index}`} recipe={item.recipe}/>;
    });
  }

  return (
    <div className="FoodRecipes">
      {renderFoodRecipes()}
    </div>
  );
}

export default FoodRecipes;