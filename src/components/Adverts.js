import React, { Component } from "react";
import "./MainPages.css";

export class Adverts extends Component {
  constructor(props) {
    super(props);
    this.state = { info: [] };
  }
  componentDidMount() {}
  render() {
    return (
      <div className="Adverts">
        <img src="ads.png" width="150px" alt="ad" />
      </div>
    );
  }
}
export default Adverts;
