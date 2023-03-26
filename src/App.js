// import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import { Home } from "./components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: <Home />,
    };
  }
  Contentset(pick) {
    if (pick === 1) {
      this.setState({ content: <Home /> });
    }
  }

  render() {
    let header = (
      <header className="header-style">
        <div>
          <a className="Cameliya" onClick={() => this.Contentset(1)}>
            Connect The Docs
          </a>
        </div>
        <div>
          <button className="head-btn " onClick={() => this.Contentset(1)}>
            Home
          </button>
          <button className="head-btn " onClick={() => this.Contentset(2)}>
            Current Events
          </button>
          <button className="head-btn " onClick={() => this.Contentset(3)}>
            Archives
          </button>
        </div>
        <div>
          <button
            className="head-btn about-us"
            onClick={() => this.Contentset(4)}
          >
            About us
            <span className="about-us-popup">
              We are Jamini and Roy this is our application.
            </span>
          </button>
        </div>
      </header>
    );
    return (
      <div className="App">
        {header}
        <div className="style-body" tag="main">
          {this.state.content}
        </div>
        <footer className="footer-style">
          © 2023 Built With React.js | By Roy Claudio & Jamini Sahu
        </footer>
      </div>
    );
  }
}

export default App;
