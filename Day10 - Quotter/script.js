"use strict";

const quoteElement = document.getElementById("quote");
const quoteAuthor = document.getElementById("quoteAuthor");
const nextQuoteBtn = document.getElementById("quoteBtn");

getQuote();

nextQuoteBtn.addEventListener("click",getQuote);

async function getQuote() {

  const configuration = {
    "headers": {
      "content-type": "application/x-www-form-urlencoded"
    },
    "body": "method=getQuote&format=json&key=&lang=ru",
    "method": "POST"
  }

  const res = await fetch('https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/',
    configuration);
  const data = await res.json();
  quoteElement.innerHTML = data.quoteText;
  quoteAuthor.innerHTML = data.quoteAuthor;

  // fetch('https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/',
  //   configuration)
  //   .then(response => response.json())
  //   .then(data => {
  //     quoteElement.innerHTML = data.quoteText;
  //     quoteAuthor.innerHTML = data.quoteAuthor;
  //   });
}



