import React from "react";
import { movies } from "../assets/data.js";

function Movies() {
  const [movieList, setMovieList] = React.useState(movies);

  const filterMovies = (type) => {
    if (type === "All") {
      setMovieList(movies);
      return;
    } else {
      setMovieList(movies.filter((data) => data.category === type));
    }
  };

  return (
    <>
      <div
        className="container"
        style={{
          textAlign: "center",
          margin: "2rem",
          width: "100%",
          maxWidth: "1200px",
          margin: "auto",
          boxSizing: "border-box",
          padding: "1rem",
        }}
      >
        <div
          className="btn-group"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            margin: "1rem auto",
            width: "100%",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => filterMovies("All")}
          >
            All
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => filterMovies("Action")}
          >
            Action
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => filterMovies("Thriller")}
          >
            Thriller
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => filterMovies("Animation")}
          >
            Animation
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => filterMovies("Horror")}
          >
            Horror
          </button>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => filterMovies("Drama")}
          >
            Drama
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => filterMovies("Sci-Fi")}
          >
            Sci-Fi
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => filterMovies("Crime")}
          >
            Crime
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          backgroundColor: "black",
          color: "white",
        }}
      >
        {movieList.map((data) => (
          <div key={data.id} style={{ maxWidth: "250px", textAlign: "center" }}>
            <div style={{ padding: "10px" }} className="hover-effect">
              <img
                src={data.poster_path}
                alt={data.title}
                style={{
                  width: "200px",
                  borderRadius: "10px",
                  marginBottom: "10px",
                  border: "2px solid yellow",
                }}
              />
            </div>
            <h5>{data.title}</h5>
            <p>{data.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Movies;
