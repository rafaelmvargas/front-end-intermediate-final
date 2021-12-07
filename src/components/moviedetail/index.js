import React from "react";
import { Link, useParams } from "react-router-dom";
import { MovieDetailContainer } from "./styles";
import FormCreateMovie from "../formCreateMovie";

function MovieDetail(props) {
  const { movieId } = useParams();
  const currMovie = props.movies.filter((movie) => movie._id === movieId);
  const loggedin = props.loggedin;

  const { posterImage, title, description } = { ...currMovie[0] };

  return (
    <>
      {loggedin && <FormCreateMovie updateMovie={props.updateMovie} currMovie={currMovie[0]} />}
      <MovieDetailContainer>
        <img src={`/img/${posterImage}`} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
        <Link to="/">Home</Link>
      </MovieDetailContainer>
    </>
  );
}

export default MovieDetail;
