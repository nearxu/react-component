import React, { Component } from "react";
import { Link } from "react-router-dom";
class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Link to="/slide"> Slide Component</Link>
        <br />
        <Link to="/tab"> Tab Component</Link>
      </div>
    );
  }
}

export default Index;
