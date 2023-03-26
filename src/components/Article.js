import React, { Component } from "react";
import "./Article.css";

export class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { info: [] };
  }
  componentDidMount() {}
  render() {
    return (
      <div className="article">
        <p>{new Date().toLocaleString()}</p>
        <h1>hello world</h1>
        <p>
          We all are stuck somewhere after learning HTML, CSS, and JavaScript
          and we want to become better but we don’t know what to do next, so we
          move to frameworks like React.js, Angular, etc. without practicing the
          basics of frontend development. You may have heard many times that if
          you need to get better at something you need to practice it, but the
          question is how to practice front-end? My answer would be to start
          with making UI elements (cards, buttons, headers, etc.) after that
          move to making full web pages and also give time and read code like
          how certain things are done (I will walk you all through the websites
          that will help you a lot.🔥) By regularly doing these things, I am
          sure you will get more confident with your front-end skills.
        </p>
        <div className="footer">
          <button className="footer-btn">learn more</button>
          <button className="footer-btn">share</button>
        </div>
      </div>
    );
  }
}
export default Article;
