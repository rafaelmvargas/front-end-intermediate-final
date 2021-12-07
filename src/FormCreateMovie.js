import React from "react";
import Button from "./button/Button";

const FormCreateMovie = ({ addMovie }) => {
  const [values, setValues] = React.useState({
    title: "Movie Title",
    image: "poster_matrix_resurrection.jpg",
    description: "Description of the movie",
  });

  const createMovie = (event) => {
    event.preventDefault();
    const movie = {
      title: values.title,
      image: values.image,
      description: values.description,
      releaseDate: values.releaseDate,
    };
    addMovie(movie);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(" name:: ", name, " value:: ", value);
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <h3>Add Movie Form</h3>
      <form onSubmit={createMovie}>
        <input
          type="text"
          placeholder="Movie title"
          value={values.title}
          name="title"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Movie image"
          value={values.image}
          name="image"
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Movie description"
          name="description"
          onChange={handleInputChange}
          value={values.description}
        />
        <input
          type="text"
          placeholder="Rlease date (YYYY-MM-DD)"
          value={values.year}
          name="releaseDate"
          onChange={handleInputChange}
        />

        <Button type="submit">Add Movie</Button>
      </form>
    </div>
  );
};

export default FormCreateMovie;
