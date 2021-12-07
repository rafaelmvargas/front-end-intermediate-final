import React from "react";
import { Link } from "react-router-dom";
import { MovieStyle, MovieInfo } from "./styles";

function Movie({ movie }) {
  const { title, releaseDate, description, posterImage, _id } = movie;
  return (
    <summary>
      <MovieStyle>
        <img src={`img/${posterImage}`} alt={title} />
        <MovieInfo>
        <h2>
          <Link to={_id}>{title}</Link>
        </h2>
        <p>{description}</p>
        <small>Release Date: {releaseDate}</small>
      </MovieInfo>
      </MovieStyle>
    </summary>
  );
}

export default Movie;
