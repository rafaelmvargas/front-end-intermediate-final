import React from "react";
import Movie from "../movie";
import FormCreateMovie from "../formCreateMovie";

function Movies({ movies, loggedin, addMovie }) {
  return (
    <summary>
      {loggedin && <FormCreateMovie addMovie={addMovie} />}
      {movies.map((movie) => (
        <Movie key={movie._id} movie={movie} />
      ))}
    </summary>
  );
}

export default Movies;
