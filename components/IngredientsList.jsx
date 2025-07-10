// A React functional component that displays a list of ingredients and a recipe generation prompt
export default function IngredientsList(props) {
    // Mapping each ingredient in the props.ingredients array to a <li> element
    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li> // Using ingredient as key for list item
    ))

    return (
        <section>
            {/* Section heading */}
            <h2>Ingredients on hand:</h2>

            {/* Unordered list to display ingredients; aria-live helps screen readers announce updates */}
            <ul className="ingredients-list" aria-live="polite">
                {ingredientsListItems}
            </ul>

            {/* Conditionally render the recipe prompt and button only if there are more than 3 ingredients */}
            {props.ingredients.length > 3 && (
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>

                    {/* Button to trigger the recipe generation; calls getRecipe function passed via props */}
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>
            )}
        </section>
    )
}
