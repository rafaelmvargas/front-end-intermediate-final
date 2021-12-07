import React from "react";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  const { title, year, description, image, _id } = movie;
  return (
    <summary>
      <img src={`img/${image}`} alt={title} />
      <h2>
        <Link to={_id}>{title}</Link>
      </h2>
      <p>{description}</p>
      <small>Published: {year}</small>
    </summary>
  );
}

export default Movie;
