import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Results from "./Results";
import Details from "./Details";
import SearchParams from "./SearchParams";
import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
          <Link to="/search-params">
            <span aria-label="search" role="img">
              🔍
            </span>
          </Link>
        </header>
        <Provider store={store}>
          <Router>
            <Results path="/" />
            <Details path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
