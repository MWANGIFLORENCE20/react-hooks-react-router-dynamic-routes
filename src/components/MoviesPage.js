import React from "react";
import { Route,useRouteMatch } from "react-router-dom";
import MovieList from "./MovieList";
import MoviesShow from "./MoviesShow";

function MoviesPage({ movies }) {
  const match=useRouteMatch()
  console.log(match)
  return (
    <div>
      <MovieList movies={movies} />
      <Route exact path={match.url}>
        <h3>choose a movie from the list above. </h3>
      </Route>
      <Route path={`${match.url}/:movieid`}>
      <MoviesShow movies={movies}/>
      <h3>more information</h3>
      </Route>
    </div>
  );
}
export default MoviesPage;
