import React, { Component } from 'react';
import logo from './logo.svg';

var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
var pageToVisit = "https://coinmarketcap.com/historical/20171119/";

class Crawler extends Component {
    constructor() {
        super();
        this.state = {
            message: ''
        }
    }

    runCrawler = () => {
        console.log("Visiting page " + pageToVisit);
        this.setState({message : 'Crawling... wait a moment...'});
        var options = {
            url: "https://cors-anywhere.herokuapp.com/"+ pageToVisit
        };
        request(options, function(error, response, body) {
           if(error) {
             console.log("Error: " + error);
             return;
           }
           // Check status code (200 is HTTP OK)

           console.log("Status code: " + response.statusCode);
           if(response.statusCode === 200) {
             // Parse the document body
             var $ = cheerio.load(body);
             console.log("Page title:  " + $('title').text());
           }
        });
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
