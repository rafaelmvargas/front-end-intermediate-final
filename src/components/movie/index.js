import React from "react";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  const { title, releaseDate, description, posterImage, _id } = movie;
  return (
    <summary>
      <img src={`img/${posterImage}`} alt={title} />
      <h2>
        <Link to={_id}>{title}</Link>
      </h2>
      <p>{description}</p>
      <small>Release Date: {releaseDate}</small>
    </summary>
  );
}

export default Movie;
