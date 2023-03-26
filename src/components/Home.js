import React, { Component } from "react";
import "./Home.css";
import NewsToday from "./NewsToday";
import MainFeed from "./MainFeed";
import Adverts from "./Adverts";
export class Home extends Component {
  static displayName = Home.name;
  //https://www.digitalocean.com/community/tutorials/how-to-scrape-a-website-using-node-js-and-puppeteer
  //This link explains how to use puppeteer to create
  //an instance of a browser, using that
  // you will be able to webscrape any website
  //https://stackoverflow.com/questions/55031823/how-to-make-puppeteer-work-with-a-reactjs-application-on-the-client-side
  //The second link explains how to use puppeteer on the client-side
  // this will expose the puppeteer websocket to the client
  constructor(props) {
    super(props);
    this.state = { info: [] };
  }
  async componentDidMount() {
    var link2 = "http://books.toscrape.com";
    const response = await fetch(link2);
    const htmlString = await response.text();
    console.log(htmlString);
  }

  render() {
    return (
      <div className="Home-container">
        <NewsToday />
        <MainFeed />
        <Adverts />
      </div>
    );
  }
}
