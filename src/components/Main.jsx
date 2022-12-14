import React, { useEffect, useState } from 'react'
import RecipeTile from './RecipeTile';
import { v4 as uuidv4 } from "uuid";

function Main({ user }) {
    // console.log(user)
    const [query, setquery] = useState("");
    const [recipes, setrecipes] = useState([]);

    const Your_id = '6d7424b8';
    const Your_key = '52faabfb169af7bbf2805aca0c29acbc';
    const url = `https://api.edamam.com/api/recipes/v2/?q=${query}&app_id=${Your_id}&app_key=${Your_key}&type=any`;


    const getRecipeInfo = async () => {
        const result = await fetch(url);
        const fetchJson = await result.json();
        setrecipes(fetchJson.hits);
        setquery("");
        // console.log(fetchJson.hits);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        getRecipeInfo();
    };
    // console.log(recipes)
    return (
        <div className="container">
            <div className='center'>
                <h1 onClick={getRecipeInfo}>Hello, {user.login}!</h1>
                <form className="app__searchForm" onSubmit={onSubmit}>
                    <input className="app__input" type="text" placeholder="enter ingridient" autoComplete="Off" value={query} onChange={(e) => setquery(e.target.value)} />
                    <input className="app__submit" type="submit" value="Search" />

                </form>
            </div>
            <div className='app__recipes'>
                {recipes?.map((recipe) => {
                    return <RecipeTile key={uuidv4()} recipe={recipe} user={user}/>;
                })}
            </div>


        </div>
    );
}

export default Main;

