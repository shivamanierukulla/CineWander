import { createContext,useContext } from "react"
export const MovieContext=createContext()
import { useState } from "react"

function MovieRead({children})
{
    const [movie,setMovie]=useState("avengers")
    const [movieData, setMovieData] = useState([]);
    const [error, setError] = useState(null);
    
    const getMovie=async()=>{
          try{
            let res=await fetch(`https://www.omdbapi.com/?apikey=306bcf36&s=${movie}`)
            if(res.status!==200)
            {
                throw new Error("Movie not found")
            }
            let movieData=await res.json()
            setMovieData(movieData)
            console.log(movieData)
            setError(null)
          }
          catch(err)
         {
                setError(`Failed to fetch data for  movie:  ${movie}`)
         }
          
    }


  return(
   <MovieContext.Provider value={{ movie, setMovie, getMovie, movieData,setMovieData, error ,setError}}>
       {children}
  </MovieContext.Provider>
  )
}
export default MovieRead