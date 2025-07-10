// Import necessary modules and components
import React from "react";
import IngredientsList from "./components/IngredientsList";
import ClaudeRecipe from "./components/ClaudeRecipe";
import { getRecipeFromGpt } from "./ai";

// Main component handles input, state, and rendering recipe/ingredient list
export default function Main() {
  // State to hold the list of ingredients
  const [ingredients, setIngredients] = React.useState([]);

  // State to hold the current ingredient input value
  const [ingredientInput, setIngredientInput] = React.useState("");

  // State to hold the generated recipe (as Markdown text)
  const [recipe, setRecipe] = React.useState("");

  // State to track loading status when fetching recipe
  const [loading, setLoading] = React.useState(false);

  // Function to call the AI API and fetch a recipe
  async function getRecipe() {
    setLoading(true); // Show loading state
    try {
      // Call the Groq API with the current ingredients
      const recipeMarkdown = await getRecipeFromGpt(ingredients);
      setRecipe(recipeMarkdown); // Update recipe state with the response
    } catch (error) {
      // Handle any errors gracefully
      console.error("Error getting recipe:", error);
      setRecipe(
        "Sorry, there was an error getting your recipe. Please try again."
      );
    } finally {
      setLoading(false); // Hide loading state
    }
  }

  // Function to handle form submission and add new ingredient to the list
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient").trim();
    if (
      newIngredient &&
      ingredients.some(
        (ing) => ing.toLowerCase() === newIngredient.toLowerCase()
      )
    ) {
      alert("This ingredient is already in the list.");
      return;
    }
    if (newIngredient) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }
  }

  return (
    <main>
      {/* Form to add a new ingredient */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addIngredient(new FormData(e.target));
          setIngredientInput("");
        }}
        className="add-ingredient-form"
      >
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
          required
          value={ingredientInput}
          onChange={(e) => setIngredientInput(e.target.value)}
        />
        <button type="submit">Add ingredient</button>
      </form>
      <center><p>Add atleast 4 ingredients</p></center>

      {/* Show ingredients list and Get Recipe button if there are any ingredients */}
      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}

      {/* Show loading message when fetching the recipe */}
      {loading && <p>Getting your recipe...</p>}

      {/* Show the recipe once it has been generated */}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
