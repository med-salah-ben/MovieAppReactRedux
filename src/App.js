import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Description from "./component/Discription/Discription";
import MovieList from "./component/MovieList/MovieList";
import SearchBar from "./component/SearchBar/SearchBar";
import AddnewMovie from "./component/AddnewMovie/AddnewMovie";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <MovieList />
                <AddnewMovie />
              </>
            )}
          />
          <Route
            exact
            path="/description/:id"
            render={props => <Description {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
