import * as React from "react";
import "./styles/App.scss";
import FoodForm from "./components/FoodForm";
import FoodList from "./components/FoodList";
import FoodRecipes from "./components/FoodRecipes";
import FoodListElement from "./components/FoodListElement";
import axios from "axios";

function App() {
  const [ingredient, setIngredient] = React.useState("");
  const [ingredients, setIngredients] = React.useState([]);
  const [recipes, setRecipes] = React.useState([]);
  const [errorMsg, setErrorMsg] = React.useState("");
  const inputRef = React.useRef(null);

  function addIngredient(event) {
    setIngredient(event.target.value);
  }
  
  function submitForm(event) {
    console.log("aaaa");
    console.log("aaaa");
    console.log("aaaa");
    const allowedIngredients = ["eggs", "beef", "carrot", "onion", "butter", "bread", "cheese", "strawberries", "cream"];
    event.preventDefault();
    if (ingredient !== "" && allowedIngredients.includes(ingredient) && !ingredients.includes(ingredient)) {
      setIngredients([...ingredients, ingredient]);
      setIngredient("");
      inputRef.current.value = "";
      setErrorMsg("");
    } else if (ingredients.includes(ingredient)) {
      setErrorMsg("Ingredient with the same name is already on the list.");
    } else {
      setErrorMsg(`Wrong ingredient. Choose from ${allowedIngredients.join(", ")}.`);
    }
  }
  
  function getRecipes() {
    const params = {
      q: ingredients.join(),
      app_id: "ea72d3ec",
      app_key: "57cc0adb35d2864af116570babdf6bea",
      type: "public",
    };
    axios.get("https://api.edamam.com/api/recipes/v2", { params }).then(function (response) {
      setRecipes(response.data.hits);
    });
  }

  function removeIngredient(event) {
    const newIngredients = ingredients.filter(function (item) {
      return item !== event.target.id;
    });
    setIngredients(newIngredients);
  }

  function renderIngredients() {
    if (ingredients.length && ingredients[0] !== "") {
      return ingredients.map(function (ingredient, index) {
        return <FoodListElement key={`${ingredient}-${index}`} ingredient={ingredient} onButtonClick={removeIngredient}/>;
      });
    }
    return <p className="FoodList-p">No ingredients yet! Start adding! :)</p>;
  }

  return (
    <div className="App">
      <div className="App-container">
        <FoodForm inputRef={inputRef} onInputChange={addIngredient} onButtonClick={submitForm} errorMsg={errorMsg}/>
        <FoodList>
          {renderIngredients()}
        </FoodList>
      </div>
      <button className="App-button" onClick={getRecipes}>Search for recipes!</button>
      {recipes.length ? <FoodRecipes recipes={recipes} /> : null}
    </div>
  );
}

export default App;
