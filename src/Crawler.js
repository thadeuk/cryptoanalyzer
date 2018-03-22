// @flow
import React, {Component} from 'react';
import logo from './logo.svg';
import fetch from 'node-fetch';
import mongoose from 'mongoose';
import cheerio from 'cheerio';

var pageToVisit = 'https://coinmarketcap.com/historical/20171119/';

class Crawler extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
    };
  }

  parseBody = body => {
    console.log(body);
    var $ = cheerio.load(body);
    console.log($('tbody'));
    debugger;
  };

  runCrawler = () => {
    this.setState({message: 'Crawling... wait a moment...'});
    var url = 'https://cors-anywhere.herokuapp.com/' + pageToVisit;
    console.log('Visiting page ' + url);
    fetch(url)
      .then(res => res.text())
      .then(body => this.parseBody(body));
  };

  render() {
    return (
      <div className="Crawler">
        <header className="Crawler-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Crawler-title">Welcome to CryptoCrawler</h1>
        </header>
        <p className="Crawler-intro">
          <button onClick={this.runCrawler}>Load</button>
          {this.state.message}
        </p>
      </div>
    );
  }
}

export default Crawler;
