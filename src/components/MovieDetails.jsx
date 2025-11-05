import { useState,useEffect } from "react";
import { useParams,NavLink } from "react-router-dom";
import './MovieDetails.css'

function MovieDetails()
{
    const {id}=useParams()
    const [movie,setMovie]=useState(null)

    function addToFav(){
     let existing=JSON.parse(localStorage.getItem("favorites")) || []
     let alreadyAdded=existing.some((m)=>m.imdbID === movie.imdbID)
     if(!alreadyAdded)
     {
      existing.push(movie)
      localStorage.setItem("favorites",JSON.stringify(existing));
      alert("Added to Favorites ❤️");
     }
     else {
    alert("Already in Favorites!");
    }
    }

    useEffect(()=>{
         async function fetchMovie() {
           
            let res=await fetch(`https://www.omdbapi.com/?apikey=306bcf36&i=${id}`)
            let data=await res.json()
            setMovie(data)
            console.log(data)
         }

            fetchMovie()
    },[id])


     if (!movie) {
            return <h2>Loading...</h2>;
    }

    return(
         <div className="movie-details-container d-flex justify-content-center align-items-center">
      <div className="movie-details-card shadow-lg p-4 rounded-4 text-light">
        <div className="row g-4 align-items-center">
          {/* Poster Section */}
          <div className="col-lg-4 text-center">
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/400x600?text=No+Image"
              }
              alt={movie.Title}
              className="img-fluid rounded-3 movie-poster"
            />
          </div>

          {/* Info Section */}
          <div className="col-lg-8">
            <h2 className="fw-bold mb-3 text-warning">{movie.Title}</h2>
            <p className="text-primary mb-2">
              {movie.Year} | {movie.Rated} | {movie.Runtime}
            </p>
            <p><strong>Released:</strong> {movie.Released}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Writer:</strong> {movie.Writer}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>Language:</strong> {movie.Language}</p>
            <p><strong>Country:</strong> {movie.Country}</p>
            <p><strong>Awards:</strong> 🏆 {movie.Awards}</p>
            <p className="mt-3 fst-italic text-primary">{movie.Plot}</p>

            {/* Ratings */}
            {movie.Ratings && movie.Ratings.length > 0 && (
              <div className="mt-3">
                <h5 className="fw-bold text-info">Ratings</h5>
                <ul className="list-unstyled">
                  {movie.Ratings.map((r, idx) => (
                    <li key={idx}>
                      ⭐ <strong>{r.Source}</strong>: {r.Value}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Extra Info */}
            <div className="extra-info mt-3">
              <p><strong>Metascore:</strong> {movie.Metascore}</p>
              <p><strong>IMDb Rating:</strong> ⭐ {movie.imdbRating}</p>
              <p><strong>IMDb Votes:</strong> 🗳 {movie.imdbVotes}</p>
              <p><strong>Type:</strong> {movie.Type}</p>
              <p><strong>DVD Release:</strong> {movie.DVD}</p>
              <p><strong>Box Office:</strong> 💰 {movie.BoxOffice}</p>
              <p><strong>Production:</strong> {movie.Production}</p>
              <p>
                <strong>Website:</strong>{" "}
                {movie.Website !== "N/A" ? (
                  <a
                    href={movie.Website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-info text-decoration-underline"
                  >
                    Visit Website 🌐
                  </a>
                ) : (
                  "N/A"
                )}
              </p>
            </div>

            {/* IMDb Badges */}
            <div className="mt-3">
              {movie.imdbRating && (
                <span className="badge bg-warning text-dark fs-6 me-2">
                  ⭐ IMDb: {movie.imdbRating}
                </span>
              )}
              {movie.imdbVotes && (
                <span className="badge bg-secondary fs-6">
                  🗳 {movie.imdbVotes} votes
                </span>
              )}
              
            </div>
            <div className="mt-3">
              <button type="submit" className="btn btn-primary"onClick={addToFav}>❤️ Add to Favorites</button>
            </div>

            {/* Back Button */}
            <div className="mt-4">
              <NavLink to="/" className="btn btn-outline-light rounded-pill px-4">
                ⬅ Back
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    )

    
}
export default MovieDetails;