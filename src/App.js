import "./styles.css"
import { FaTwitter } from 'react-icons/fa';
import React, { useState } from "react";

function App() {
  
  const allColors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
  ];

  const allQuotes = [
    {"quote":"Life isn’t about getting and having, it’s about giving and being.", "author": "Kevin Kruse"},
    {"quote":"Whatever the mind of man can conceive and believe, it can achieve.", "author":"Napoleon Hill"},
    {"quote":"Strive not to be a success, but rather to be of value.", "author":"Albert Einstein"},
    {"quote":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "author":"Robert Frost"},
    {"quote":"I attribute my success to this: I never gave or took any excuse.", "author":"Florence Nightingale"},
    {"quote":"You miss 100% of the shots you don’t take.", "author":"Wayne Gretzky"}
  ]

  const [currentQuote, setQuote] = useState(allQuotes[Math.floor(Math.random()*allQuotes.length)])
  const [currentColor, setColor] = useState(allColors[Math.floor(Math.random()*allColors.length)])

  const getQuote = (exclude) => {
    let newQuote = allQuotes[Math.floor(Math.random()*allQuotes.length)];

    while (exclude['quote'] === newQuote['quote']) {
      newQuote = allQuotes[Math.floor(Math.random()*allQuotes.length)];
    }

    return newQuote;

  }

  const getColor = (exclude) => {
    let newColor = allColors[Math.floor(Math.random()*allColors.length)];

    while (newColor === exclude) {
      newColor = allColors[Math.floor(Math.random()*allColors.length)];
      console.log('DUPE');
    }

    return newColor;

  }

  const changeState = (currentQuote, currentColor) => {
    setQuote(currentQuote);
    setColor(currentColor);
  }

  return (
    <div id="wrapper" style={{backgroundColor:currentColor}}>
        <div id="quote-box">
          <div id="text" style={{color:currentColor}}>
            {currentQuote['quote']}
          </div>
          <div id="author" style={{color:currentColor}}>
            - {currentQuote['author']}
          </div>
          <div id="buttons">
              <button id="tweet-quote-button"style={{backgroundColor:currentColor}}>
                <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer">
                  <FaTwitter/>
                </a>
              </button>
              <button id="new-quote" style={{backgroundColor:currentColor}} 
                onClick={() => changeState(getQuote(currentQuote),getColor(currentColor))}>New Quote
              </button>
          </div>
        </div>
        <div id="coder">
          by snowstormicecream
        </div>
    </div>
  );
}

export default App;
