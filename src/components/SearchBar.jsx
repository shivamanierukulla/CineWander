import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  function onSubmit(movieObj) {
    onSearch(movieObj.movie.trim());
    reset();
  }

  return (
    <div className="container mt-3">
      <div className="searchbar-wrapper d-flex flex-wrap justify-content-between align-items-center">
        
        {/* 🎬 Left Section — Logo + App Title */}
        <div className="d-flex align-items-center mb-2 mb-md-0">
          <img
            src="/logo.png"
            alt="App Logo"
            width="45"
            height="45"
            className="me-2 logo-img"
          />
          <h4 className="text-light fw-bold app-title m-0">CineWander</h4>
        </div>

        {/* 🔍 Middle Section — Search Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-grow-1 align-items-start search-form mx-2"
        >
          {/* Input + Error vertically */}
          <div className="d-flex flex-column flex-grow-1 me-2">
            <input
              type="text"
              {...register("movie", { required: true })}
              className="form-control mb-1 rounded-pill px-3"
              placeholder="🔍 Search for movies..."
            />
            {errors.movie?.type === "required" && (
              <p className="text-danger small ms-2 mb-0">**Movie name is required</p>
            )}
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-success px-4 rounded-pill h-100">
            Enter
          </button>
        </form>

        {/* ❤️ Right Section — Favorites */}
        <NavLink
          to="/favorites"
          className="btn btn-outline-light fav-btn ms-3 mt-2 mt-md-0 rounded-pill px-4"
        >
          ❤️ Favorites
        </NavLink>
      </div>
    </div>
  );
}

export default SearchBar;
