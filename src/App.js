import React from "react";
import Recipes from "./Recipes";
import RecipeDetail from "./RecipeDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";

function App() {
  // const [recipes, setRecipes] = React.useState([]);
  const { loading, data: recipes, error } = useFetch(`/api/recipes`);

  // React.useEffect(() => {
  //   fetch(`/api/recipes`)
  //     .then((response) => response.json())
  //     .then((data) => setRecipes(data));
  // }, []);

  if (loading === true) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Recipes recipes={recipes} />} />
          <Route
            path="/:recipeId"
            element={<RecipeDetail recipes={recipes} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
