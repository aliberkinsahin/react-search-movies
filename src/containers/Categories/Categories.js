import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as actions from "../../redux/actions";
import { Paper, Chip } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import useStyles from "./styles";
import MovieCardGroup from "../Home/MovieCardGroup/MovieCardGroup";
import Spinner from "../../components/Spinner/Spinner";

export default function Categories(props) {
  let history = useHistory();
  const categoryId = props.match.params.id;
  const classes = useStyles();

  const [categoryName, setCategoryName] = useState("");
  const [page, setPage] = useState(1);

  const categories = useSelector((state) => {
    return state.categories.categories;
  });
  const movies = useSelector((state) => {
    return state.categories.movies;
  });
  const totalPages = useSelector((state) => {
    return state.categories.totalPages;
  });
  const loadingPercentage = useSelector((state) => {
    return state.categories.loading;
  });

  const dispatch = useDispatch();
  const fetchCategories = useCallback(
    () => dispatch(actions.fetchCategories()),
    [dispatch]
  );
  const getDiscoverCategory = useCallback(
    (id, page) => dispatch(actions.getDiscoverCategory(id, page)),
    [dispatch]
  );
  const scrollToTop = useCallback(() => dispatch(actions.setScrollToTop()), [
    dispatch,
  ]);

  useEffect(() => {
    if (!categories) {
      fetchCategories();
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (categories) {
      let categorySelected = categories.filter(
        (_cat) => _cat.id.toString() === categoryId
      );
      if (categorySelected.length !== 0) {
        setCategoryName(categorySelected[0].name);
        getDiscoverCategory(categoryId, page);
      }
    }
  }, [categoryId, categories, getDiscoverCategory, page]);

  const handleClick = (categoryId) => {
    history.push(`/categories/${categoryId}`);
    setPage(1);
  };

  const handlePagination = (event, value) => {
    setPage(value);
    scrollToTop();
  };

  let categoryChips = null;
  if (categories) {
    categoryChips = categories.map((_category) => {
      return (
        <li key={_category.id}>
          <Chip
            color="primary"
            className={classes.chip}
            label={_category.name}
            onClick={() => handleClick(_category.id)}
          />
        </li>
      );
    });
  }

  let discoverCategoriesRender = <Spinner />;
  if (loadingPercentage === 100) {
    if (categoryName) {
      discoverCategoriesRender = (
        <React.Fragment>
          <MovieCardGroup
            header={`Discover: ${categoryName}`}
            movies={movies}
          />
          <div className={classes.pagination}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePagination}
            />
          </div>
        </React.Fragment>
      );
    }
  }

  return (
    <React.Fragment>
      <Paper component="ul" className={classes.root} elevation={0}>
        {categoryChips}
      </Paper>
      {discoverCategoriesRender}
    </React.Fragment>
  );
}
