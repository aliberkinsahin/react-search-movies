import React from "react";
import Appbar from "./containers/Appbar/Appbar";
import Home from "./containers/Home/Home";
import Search from "./containers/Search/Search"
import Categories from "./containers/Categories/Categories"
import MovieDetails from "./containers/MovieDetails/MovieDetails";
import PersonDetails from "./containers/PersonDetails/PersonDetails";
import About from "./containers/About/About"
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Appbar />
      <Switch>
        <Route path="/person/:id" component={PersonDetails} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/categories/:id" component={Categories} />
        <Route path="/categories" component={Categories} />
        <Route path="/search" component={Search} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
