import React from "react";
import { Link } from "react-router-dom";
import { MovieStyle, MovieInfo } from "./styles";

function Movie({ movie }) {
  const { title, releaseDate, description, posterImage, _id } = movie;

  const date = new Date(releaseDate);
  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];

  return (
    <summary>
      <MovieStyle>
        <img src={`img/${posterImage}`} alt={title} />
        <MovieInfo>
          <h2>
            <Link to={_id}>{title}</Link>
          </h2>
          <p>{description}</p>
          <small>
            Release Date: {month}/{day}/{year}
          </small>
        </MovieInfo>
      </MovieStyle>
    </summary>
  );
}

export default Movie;
