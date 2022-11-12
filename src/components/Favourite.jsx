import React from 'react'
import { v4 as uuidv4 } from "uuid";


export default function Favourite({ myRecipe }) {
    // console.log(myRecipe)
    return (
        <>
            <div className="container">
                <div className='center'>
                    <h1>My recipes</h1>
                    <div className='app__recipes'>
                        {myRecipe?.map((recipe) => {
                            return (
                                <div className="recipeTile" key={uuidv4()}>
                                    <img className="recipeTile__img" src={recipe.img} />
                                    <p className="recipeTile__name">
                                        <a id="label" href={recipe.url}>{recipe.title}</a>
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
