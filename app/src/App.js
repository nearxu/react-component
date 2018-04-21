import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Index from "./components/index";
// import Slide from "./components/slide";
import Tab from "./components/tab";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Index} />
          {/* <Route path="/slide" component={Slide} /> */}
          <br />
          <Route path="/tab" component={Tab} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
