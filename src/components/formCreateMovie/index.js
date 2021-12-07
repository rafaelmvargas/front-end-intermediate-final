import React from "react";
import Button from "../../button/Button";

const FormCreateMovie = ({ addMovie, updateMovie, currMovie={} }) => {
  console.log({ currMovie });

  const [values, setValues] = React.useState({
    title: currMovie.title || "",
    posterImage: currMovie.posterImage || "",
    description: currMovie.description || "",
    releaseDate: currMovie.releaseDate || "",
  });

  const createMovie = (event) => {
    event.preventDefault();
    const movie = {
      title: values.title,
      posterImage: values.posterImage,
      description: values.description,
      releaseDate: values.releaseDate,
    };
    if (addMovie != null) {
      addMovie(movie);
    } else {
      updateMovie(movie);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(" name:: ", name, " value:: ", value);
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <h3>{addMovie ? "Add" : "Edit"} Movie Form</h3>
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
          value={values.posterImage}
          name="posterImage"
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
          value={values.releaseDate}
          name="releaseDate"
          onChange={handleInputChange}
        />

        <Button type="submit">{addMovie ? "Add" : "Update"} Movie</Button>
      </form>
    </div>
  );
};

export default FormCreateMovie;
