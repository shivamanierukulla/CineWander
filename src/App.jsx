import { createBrowserRouter, RouterProvider } from "react-router-dom";
import List from "./components/List";
import MovieLayout from "./components/MovieLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDetails from "./components/MovieDetails";
import Favorites from "./components/Favorites";

function app()
{
 

  const browserRouterObject=createBrowserRouter([
    {
      path:'/',
      element: <MovieLayout/>
    },
    {
      path:'/movie/:id',
      element: <MovieDetails/>
    },
    {
      path:'/favorites',
      element:<Favorites/>
    }
  ])

  return(
   <div>
     <RouterProvider router={browserRouterObject}/>
    
   </div>
  )
}
export default app;