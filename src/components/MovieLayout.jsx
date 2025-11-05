import SearchBar from "./SearchBar";
import List from "./List";
import { useEffect, useState, useContext } from "react";
import { MovieContext } from "../contexts/MovieRead";

function MovieLayout()
{
    const {movie,setMovie,getMovie,movieData,setMovieData, error ,setError}=useContext(MovieContext)
    

    const handleSearch=(newmovie)=>{
        if(newmovie!==null)
        {
            setMovie(newmovie)
        }
    }
 
    

    useEffect(()=>{
         getMovie();
    },[movie])

    

    return(
          <div>
            <SearchBar onSearch={handleSearch}/>
            <List/>
          
          </div>
    )

}

export default MovieLayout;