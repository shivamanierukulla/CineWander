import { useContext } from "react";
import { MovieContext } from "../contexts/MovieRead";
import { NavLink } from "react-router-dom";
import "./List.css";

function List() {
  const { movieData } = useContext(MovieContext);

  // Handle "no data"
  if (movieData?.Response === "False") {
    return (
      <h4 className="text-center mt-5 text-danger">
        ❌ Movie not found! Try a different title.
      </h4>
    );
  }

  // Handle "loading"
  if (!movieData || !movieData.Search) {
    return (
      <h4 className="text-center mt-5 text-muted">
        🔎 Search for your favorite movies!
      </h4>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        {movieData.Search.map((movie) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={movie.imdbID}>
            <NavLink className="text-decoration-none" to={`/movie/${movie.imdbID}`}>
              <div className="card movie-card h-100 border-0 shadow-sm">
                <div className="card-img-container">
                  <img
                    src={
                      movie.Poster !== "N/A"
                        ? movie.Poster
                        : "https://via.placeholder.com/300x400?text=No+Image"
                    }
                    className="card-img-top"
                    alt={movie.Title}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-primary">{movie.Title}</h5>
                  <p className="card-text text-muted mb-1">{movie.Year}</p>
                  <span className="badge bg-success">{movie.Type.toUpperCase()}</span>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
