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
      <div className="searchbar-wrapper d-flex flex-wrap justify-content-between align-items-start">
        
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-grow-1 align-items-start search-form"
        >
          <div className="d-flex flex-column flex-grow-1">
            <input
              type="text"
              {...register("movie", { required: true })}
              className="form-control mb-1"
              placeholder="🔍 Search for movies..."
            />
            {errors.movie?.type === "required" && (
              <p className="text-danger small ms-1 mb-0">**Movie name is required</p>
            )}
          </div>

          <button type="submit" className="btn btn-success h-100">
            Enter
          </button>
        </form>

        
        <NavLink to="/favorites" className="btn btn-outline-light fav-btn ms-3 mt-2 mt-md-0">
          ❤️ Favorites
        </NavLink>
      </div>
    </div>
  );
}

export default SearchBar;
