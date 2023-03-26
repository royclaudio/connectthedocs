import React, { Component } from "react";
import "./MainPages.css";
import Article from "./Article";
export class MainFeed extends Component {
  constructor(props) {
    super(props);
    this.state = { info: [] };
  }
  componentDidMount() {}
  render() {
    return (
      <div className="Main-feed">
        <Article />
        <Article />
        <Article />
      </div>
    );
  }
}
export default MainFeed;
