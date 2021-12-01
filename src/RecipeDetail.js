import React from "react";
import { Link, useParams } from "react-router-dom";

function RecipeDetail(props) {
  const { recipeId } = useParams();
  const currRecipe = props.recipes.filter((recipe) => recipe._id === recipeId);
  const {image, title, description} = { ...currRecipe[0] };

  return (
    <div>
      <img src={`/img/${image}`} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default RecipeDetail;
