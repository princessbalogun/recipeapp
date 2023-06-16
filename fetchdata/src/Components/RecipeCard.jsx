import React from "react";
const RecipeCard = ({ recipe }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe;
    
    return (
        <div className="card">
            <img
                src={strMealThumb}
                className="cardimg"
            />
            <div className="cardbody">
                <span className="category">{strCategory}</span>
                <h3>{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">Recipe Info Here </a>
            </div>
        </div>
    )
};

export default RecipeCard;