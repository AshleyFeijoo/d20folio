import React, { Component } from "react";
import logo from "./d20-folio-logo-1.png";
import "./App.css";
import { Jumbotron } from "reactstrap";
import { BrowserRouter, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar"
class App extends Component {
  render() {
    return (
      <div className="App ">
        <BrowserRouter>
          <NavigationBar className="">Navbar here</NavigationBar>
          <Route path="/" component={() => <div>Hello World</div>} />
          <Route path="/mychars" component={() => <div>My Characters</div>} />
          <Route path="/new" component={() => <div>Create a character</div>} />
          <Route
            path="/edit/:id"
            component={() => <div>Edit A character</div>}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
