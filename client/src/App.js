import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SavedBooks from "./pages/saved";
import SearchBooks from "./pages/search";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron>
            <h1>(React) Google Books Search</h1>
            <h5>Search for and Save Books of Interest</h5>
          </Jumbotron>
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/save" component={SavedBooks} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
