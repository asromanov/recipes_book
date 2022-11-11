import React, { useEffect } from "react";


export default function RecipeTile({ recipe }) {
  return ( 
      <div className="recipeTile"
      >
        <img className="recipeTile__img" src={recipe.recipe.image} />
        <p className="recipeTile__name">
         <a id="label" href={recipe.recipe.url}>{recipe.recipe.label}</a>
        </p>
      </div>
    
  );
}
