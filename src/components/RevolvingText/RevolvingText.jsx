import React, { useEffect } from "react";
import { observer } from "mobx-react";

import "./RevolvingText.less";

export const RevolvingText = observer(() => {
  const words = document.getElementsByClassName("word");
  /*const words = [
    "Frontend Developer",
    "Woodworker",
    "Boulderer",
    "Music producer",
    "Photogrpaher",
  ];*/
  const wordArray = [];
  var currentWord = 0;

  function changeWord() {
    var cw = wordArray[currentWord];
    var nw =
      currentWord == words.length - 1
        ? wordArray[0]
        : wordArray[currentWord + 1];

    for (var i = 0; i < cw.length; i++) {
      animateLetterOut(cw, i);
    }

    for (var i = 0; i < nw.length; i++) {
      nw[i].className = "letter behind";
      nw[0].parentElement.style.opacity = 1;
      animateLetterIn(nw, i);
    }
    currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
  }

  function animateLetterOut(cw, i) {
    setTimeout(function () {
      cw[i].className = "letter out";
    }, i * 80);
  }

  function animateLetterIn(nw, i) {
    setTimeout(function () {
      nw[i].className = "letter in";
    }, 340 + i * 80);
  }

  function splitLetters(word) {
    var content = word.innerHTML;
    word.innerHTML = "";
    var letters = [];
    for (var i = 0; i < content.length; i++) {
      var letter = document.createElement("span");
      letter.className = "letter";
      letter.innerHTML = content.charAt(i);
      word.appendChild(letter);
      letters.push(letter);
    }
    wordArray.push(letters);
  }

  useEffect(() => {
    words[currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
      splitLetters(words[i]);
    }
    const refreshIntervalId = setInterval(changeWord, 3000);
    return () => {
      clearInterval(refreshIntervalId);
    };
  }, []);

  return (
    <div className="revolving__container">
      <div className="text">
        <p>I am a </p>&nbsp;
        <p>
          <span className="word">Programmer</span>
          <span className="word">Musician</span>
          <span className="word">Boulderer</span>
          <span className="word">Woodworker</span>
          <span className="word">Photographer</span>
        </p>
      </div>
    </div>
  );
});
