import React from "react";
import useStyles from "./styles";
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";

export default function Search() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SearchBar />
      <SearchResults />
    </div>
  );
}
