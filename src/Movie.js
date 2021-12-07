import React from "react";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  const { title, releaseDate, description, image, _id } = movie;
  return (
    <summary>
      <img src={`img/${image}`} alt={title} />
      <h2>
        <Link to={_id}>{title}</Link>
      </h2>
      <p>{description}</p>
      <small>Release Date: {releaseDate}</small>
    </summary>
  );
}

export default Movie;
