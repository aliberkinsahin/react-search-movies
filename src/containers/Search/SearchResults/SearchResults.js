import React from "react";
import MovieCardGroup from "../../Home/MovieCardGroup/MovieCardGroup";
import PeopleCardGroup from "./PeopleCardGroup/PeopleCardGroup";
import { useSelector } from "react-redux";

export default function SearchResults() {
  const moviesResults = useSelector((state) => {
    return state.search.moviesResults;
  });

  const peopleResults = useSelector((state) => {
    return state.search.peopleResults;
  });

  let resultsRender = null;
  if (moviesResults.length !== 0) {
    resultsRender = (
      <MovieCardGroup header="Movies Results" movies={moviesResults} />
    );
  }
  
  if (peopleResults.length !== 0) {
    resultsRender = (
      <PeopleCardGroup header="People Results" people={peopleResults} />
    );
  }

  return resultsRender;
}
