import React from "react";
import { Link, useParams } from "react-router-dom";

function MovieDetail(props) {
  const { movieId } = useParams();
  const currMovie = props.movies.filter((movie) => movie._id === movieId);
  const { image, title, description } = { ...currMovie[0] };

  return (
    <div>
      <img src={`/img/${image}`} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default MovieDetail;
