import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";

function Favorites(){
  const[favorites,setFavorites]=useState([])

  useEffect(()=>{
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  },[])
  const removeFavorite=(id)=>{
    const updated = favorites.filter((movie) => movie.imdbID !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
    alert("Movie removed from favorites");
  }
  if (favorites.length === 0) {
    return (
         <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
      <h4 className="text-light mb-4">
        No favorites yet 😢 <br />
        <span className="text-secondary">Add some movies you love!</span>
      </h4>
      <NavLink
        to="/"
        className="btn btn-outline-light rounded-pill px-4"
      >
        ⬅ Back to Home
      </NavLink>
    </div>
    );
  }
  return(
   <div className="container mt-4">
      <h2 className="text-warning mb-4 text-center">❤️ My Favorite Movies</h2>
      <div className="row">
        {favorites.map((movie) => (
          <div className="col-md-3 mb-4" key={movie.imdbID}>
            <div className="card shadow h-100 border-0">
              <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
              <div className="card-body text-center">
                <h5 className="card-title text-primary">{movie.Title}</h5>
                <p className="text-primary">{movie.Year}</p>
                <div className="d-flex justify-content-center gap-2">
                  <NavLink to={`/movie/${movie.imdbID}`} className="btn btn-sm btn-outline-primary">
                    View
                  </NavLink>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeFavorite(movie.imdbID)}
                  >
                    ❌ Remove
                  </button>
                </div>
                <div className="mt-4">
              <NavLink to="/" className="btn btn-warning rounded-pill px-4">
                ⬅ Back
              </NavLink>
            </div>
              </div>
            </div>
            
          </div>
          
        ))}

      </div>
      
    </div>
  )
}

export default Favorites;