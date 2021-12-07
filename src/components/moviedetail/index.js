import React from "react";
import { Link, useParams } from "react-router-dom";
import { MovieDetailContainer } from "./styles";

function MovieDetail(props) {
  const { movieId } = useParams();
  const currMovie = props.movies.filter((movie) => movie._id === movieId);
  const { posterImage, title, description } = { ...currMovie[0] };

  return (
    <MovieDetailContainer>
      <img src={`/img/${posterImage}`} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to="/">Home</Link>
    </MovieDetailContainer>
  );
}

export default MovieDetail;
