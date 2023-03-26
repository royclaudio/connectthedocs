import React, { Component } from "react";
import "./MainPages.css";
export class NewsToday extends Component {
  constructor(props) {
    super(props);
    this.state = { info: [] };
  }
  componentDidMount() {}
  render() {
    return <div className="News-today">news today</div>;
  }
}
export default NewsToday;
