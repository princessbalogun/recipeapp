import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import RecipeCard from "./Components/RecipeCard";
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [randomRecipe, setRandomRecipe] = useState(null);
  
  
  const getRandomRecipe = async () => {
    setIsLoading(true);
    const url = "https://www.themealdb.com/api/json/v1/1/random.php";
    const res = await fetch(url);
    const data = await res.json();
    setRandomRecipe(data.meals);
    setIsLoading(false);
  };


  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes()
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  }

  return (
    <div className="container">
      <h2>Food Recipes</h2>
      <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}


      />
      <button onClick={getRandomRecipe} className="btnrandom">unsure on what to cook? click here to generate a random recipe!</button>
      <div className="recipes">


        
        {recipes ? recipes.map(recipe => (
          <RecipeCard
             key={recipe.idMeal}
             recipe={recipe}
          />
        )) : "No Recipe exists with this name"}
      </div>
    </div>
  );
}

export default App;
















// import { useState, useEffect } from "react"


//    const App = () =>{


//   const [data, setData] = useState('https:/www.themealdb.com/api/json/v1/1/search.php?f=a')

//   const fetchHandler = async () => {

//     try {

    
//     let response = await fetch('https://api.adviceslip.com/advice')
//     cosnole.log(response)
//     if (!response.ok){
//       throw new Error('something wrong')
//     }
//       let advice = await response.json()
//     setData(advice)

//   } catch(error) {
//       console.log(error)
//     }
//     }
//   }
 
//   useEffect(() => {
//     fetchHandler()
//   }, [])
 
// return (
//   <div>
//     {
//     !data ?
//     <h2>loading...</h2>:
//     <div>
//     <h2>{data.slip.advice}</h2>
//     <button onClick={fetchHandler}>submit</button>
//     </div>
//    }

//   {/* {
//     !data ?
//     'get advice' :
//     'get more advice'
//   } */}
  
//   </div>
// )



// export default App;
