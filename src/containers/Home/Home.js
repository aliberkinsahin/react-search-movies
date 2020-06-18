import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import MovieCardGroup from "./MovieCardGroup/MovieCardGroup";
import Spinner from "../../components/Spinner/Spinner"


export default function Home() {
  
  const latestMovies = useSelector((state) => {
    return state.home.latestMovies;
  });
  const popularMovies = useSelector((state) => {
    return state.home.popularMovies;
  });
  const topRatedMovies = useSelector((state) => {
    return state.home.topRatedMovies;
  });
  const upcomingMovies = useSelector((state) => {
    return state.home.upcomingMovies;
  });
  const loadingPercentage = useSelector((state) => {
    return state.home.loading;
  });

  const dispatch = useDispatch();

  const fetchLatestMovies = useCallback(
    () => dispatch(actions.fetchLatestMovies()),
    [dispatch]
  );
  const fetchPopularMovies = useCallback(
    () => dispatch(actions.fetchPopularMovies()),
    [dispatch]
  );
  const fetchTopRatedMovies = useCallback(
    () => dispatch(actions.fetchTopRatedMovies()),
    [dispatch]
  );
  const fetchUpcomingMovies = useCallback(
    () => dispatch(actions.fetchUpcomingMovies()),
    [dispatch]
  );

  useEffect(() => {
    if (!latestMovies && !popularMovies && !topRatedMovies && !upcomingMovies) {
      fetchLatestMovies();
      fetchPopularMovies();
      fetchTopRatedMovies();
      fetchUpcomingMovies();
    }
  }, [
    fetchLatestMovies,
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchUpcomingMovies,
    latestMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
  ]);

  let loadingRender = (
    <Spinner />
  );
  if (loadingPercentage === 100) {
    loadingRender = (
      <main>
        <MovieCardGroup header="Popular Movies" movies={popularMovies} />
        <MovieCardGroup header="Top Rated Movies" movies={topRatedMovies} />
        <MovieCardGroup header="Now Playing" movies={latestMovies} />
        <MovieCardGroup header="Upcoming Movies" movies={upcomingMovies} />
      </main>
    );
  }

  return loadingRender;
}
