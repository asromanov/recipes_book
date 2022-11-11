import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";


export default function RecipeTile({ recipe }) {
  const [show, setShow] = useState(false);
  const ingredients  = recipe.recipe.ingredients
  // console.log('recipe ' + recipe)
  return ( 
      <div className="recipeTile"
      >
        <img className="recipeTile__img" src={recipe.recipe.image} />
        <p className="recipeTile__name">
         <a id="label" href={recipe.recipe.url}>{recipe.recipe.label}</a>
        </p>
        <button className="app__submit1" onClick={() => setShow(!show)}>Ingredients</button>
        {show && <RecipeDetails ingredients={ingredients} />}
      </div>
    
  );
}
