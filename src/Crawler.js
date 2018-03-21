import React, { Component } from 'react';
import logo from './logo.svg';

var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

var pageToVisit = "http://coinmarketcap.com/historical/20171119/";
console.log("Visiting page " + pageToVisit);
request(pageToVisit, function(error, response, body) {
   if(error) {
     console.log("Error: " + error);
     return;
   }
   // Check status code (200 is HTTP OK)
   
    console.log(response);
   console.log("Status code: " + response.statusCode);
   if(response.statusCode === 200) {
     // Parse the document body
     var $ = cheerio.load(body);
     console.log("Page title:  " + $('title').text());
   }
});

class Crawler extends Component {
  render() {
    return (
      <div className="Crawler">
        <header className="Crawler-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Crawler-title">Welcome to CryptoCrawler</h1>
        </header>
        <p className="Crawler-intro">
            Crawling... wait a moment...
        </p>
      </div>
    );
  }
}

export default Crawler;
