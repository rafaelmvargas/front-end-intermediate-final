import React from "react";
import Movie from "./Movie";
import FormCreateMovie from "./FormCreateMovie";

function Movies({ movies, loggedin, addMovie }) {
  return (
    <summary>
      {loggedin && <FormCreateMovie addMovie={addMovie} />}
      {movies.map((movie) => (
        <Movie key={movie._id} recipe={movie} />
      ))}
    </summary>
  );
}

export default Movies;
