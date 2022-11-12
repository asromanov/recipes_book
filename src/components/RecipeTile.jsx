import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";


export default function RecipeTile({ recipe, user }) {
  const [show, setShow] = useState(false);
  const ingredients = recipe.recipe.ingredients
  // console.log(user)
  const clickHandler = async () => {
    const response = await fetch('/fav', {
      method: 'post',
      // credentials: "include",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ title: recipe.recipe.label, img: recipe.recipe.image, url: recipe.recipe.url, user_id: user.id })
    })
  }
  return (
    <div className="recipeTile"
    >
      <img className="recipeTile__img" src={recipe.recipe.image} />
      <p className="recipeTile__name">
        <a id="label" href={recipe.recipe.url}>{recipe.recipe.label}</a>
      </p>
      {/* <input id="toggle-heart" type="checkbox" />
      <label onClick={clickHandler} for="toggle-heart">❤</label> */}
      <button type="button"  className="app__submit2" onClick={clickHandler}>Add</button>
      <button className="app__submit1" onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients} />}
    </div>

  );
}
