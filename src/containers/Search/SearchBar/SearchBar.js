import React, { useState, useEffect, useCallback } from "react";
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import * as actions from "../../../redux/actions";

export default function SearchBar(props) {
  const classes = useStyles();
  const [selection, setSelection] = useState("movies");
  const [searchInput, setSearchInput] = useState("");
  const [sendRequest, setSendRequest] = useState(false);

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSelection = (event) => {
    setSelection(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setSendRequest(true);
  };

  const dispatch = useDispatch();
  const searchMovies = useCallback(
    (moviesQuery) => dispatch(actions.searchMovies(moviesQuery)),
    [dispatch]
  );
  const searchPeople = useCallback(
    (peopleQuery) => dispatch(actions.searchPeople(peopleQuery)),
    [dispatch]
  );

  useEffect(() => {
    if (sendRequest) {
      if (selection === "movies") {
        searchMovies(searchInput)
      } else if (selection === "people") {
        searchPeople(searchInput)
      }
    }

    return () => {
      setSendRequest(false);
      setSearchInput("");
    };
    //eslint-disable-next-line
  }, [sendRequest, selection, searchMovies]);

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={submitHandler}>
        <TextField
          className={classes.input}
          id="search-input"
          label="Search"
          variant="outlined"
          value={searchInput}
          onChange={handleSearch}
        />
        <Button
          type="submit"
          className={classes.button}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>

      <FormControl className={classes.selectionForm}>
        <FormLabel>Search For...</FormLabel>
        <RadioGroup
          row
          name="search-for"
          value={selection}
          onChange={handleSelection}
        >
          <FormControlLabel
            value="movies"
            control={<Radio color="primary" />}
            label="Movies"
          />
          <FormControlLabel
            value="people"
            control={<Radio color="primary" />}
            label="People"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
