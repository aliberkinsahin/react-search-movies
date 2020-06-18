import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import App from "./App";

import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import homeReducer from "./redux/reducers/homeReducer";
import detailsReducer from "./redux/reducers/detailsReducer";
import searchReducer from "./redux/reducers/searchReducer";
import categoriesReducer from "./redux/reducers/categoriesReducer"
import { watchHome, watchDetails, watchSearch, watchCategories } from "./redux/sagas/rootSaga";

const rootReducer = combineReducers({
  home: homeReducer,
  details: detailsReducer,
  search: searchReducer,
  categories: categoriesReducer
});

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchHome);
sagaMiddleware.run(watchDetails);
sagaMiddleware.run(watchSearch);
sagaMiddleware.run(watchCategories);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
