import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";


export default function Favourite({ myRecipe }) {
    // console.log(myRecipe)
    const [allRecipes, setAllRecipes] = useState(myRecipe || []);
    const deleteUser = (id) => {
        fetch(`/api/v1/${id}`, {
            method: 'DELETE',
        })
            .then(() => setAllRecipes((prev) => prev.filter((recipe) => recipe.id !== id)))
            .catch(console.log());
    }
    return (
        <>
            <div className="container">
                <div className='center'>
                    <h1>My recipes</h1>
                    <div className='app__recipes'>
                        {allRecipes?.map((recipe) => {
                            return (
                                <div className="recipeTile" key={uuidv4()}>
                                    <img className="recipeTile__img" src={recipe.img} />
                                    <p className="recipeTile__name">
                                        <a id="label" href={recipe.url}>{recipe.title}</a>
                                    </p>
                                    <button onClick={() => deleteUser(recipe.id)} type="button" style={{ marginBottom: "15px"}} className="btn btn-outline-danger">Delete</button>
                                </div>
                    )
                        })}
                </div>
            </div>
        </div>
        </>
    )
}
