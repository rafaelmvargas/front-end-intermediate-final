import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Movies from "../movies";
import MovieDetail from "../moviedetail";
import Nav from "../nav";

import useFetch from "../../hooks/useFetch";
import useToggle from "../../hooks/useToggle";

function App() {
  const [movies, setMovies] = useState([]);
  const [loggedin, setLoggedin] = useToggle(false);
  const [loading, setLoading] = useToggle(true);
  const [error, setError] = React.useState("");
  const { get, post, put } = useFetch("/api/movies");

  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    setLoading(true);
    get("/api/movies")
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const addMovie = (movie) => {
    post("/api/movies", movie).then((data) => {
      setMovies([data, ...movies]);
    });
  };

  const updateMovie = (movie) => {
    // Update movie by putting it to the server
    put("/api/movies", movie).then((data) => {
      setMovies(movies.map((m) => (m._id === data._id ? data : m)));
    });
  };

  if (loading === true) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <BrowserRouter>
        <Nav loggedin={loggedin} setLoggedin={setLoggedin} />
        <Routes>
          <Route
            path="/"
            element={
              <Movies movies={movies} loggedin={loggedin} addMovie={addMovie} />
            }
          />
          <Route
            path="/:movieId"
            loggedin={loggedin}
            element={
              <MovieDetail
                loggedin={loggedin}
                movies={movies}
                updateMovie={updateMovie}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
