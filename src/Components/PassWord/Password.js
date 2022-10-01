import React from "react";
import "./Password.css"
import { useState } from "react";


function Password() {
  const [word, setword] = useState({
    length: 5,
    uppercase: false,
    lowercase: false,
    number: false,
    symbols: false,
  });
  const [handelText, setHandelText] = useState("");
  const [Copied, setCopied] = useState(false);

  const handelChangeUppercase = () => {
    setword({
      word,
      uppercase: word.uppercase,
    });
    setHandelText(word.uppercase);
  };
  const handelChangelowercase = () => {
    setword({
      word,
      lowercase: word.lowercase,
    });
  };
  const handelChangeNumber = () => {
    setword({
      word,
      numbercase: word.number,
    });
  };
  const handelChangeSymbols = (e) => {
    setHandelText({
      word,
      symbolscase: word.symbols,
    });
  };
  const setwordLength = (val) => {
    setword({
      word,
      length: val,
    });
  };
  function generatepwd() {
    console.log("clicked");
    const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const symbolArray = ["!", "@", "#", "$", ",%", "&,", "*", "(", ")"];

    const characterCodes = Array.from(Array(26)).map((_e, i) => i + 97);
    const lowerCaseLetters = characterCodes.map((letter) =>
      String.fromCharCode(letter)
    );

    const upperCaseLetters = lowerCaseLetters.map((letter) =>
      letter.toUpperCase()
    );

    const { length, uppercase, lowercase, number, symbols } = word;

    const generateTheWord = (length, uppercase, lowercase, number, symbols) => {
      const availableCharacters = [
        uppercase ? upperCaseLetters : [],
        lowercase ? lowerCaseLetters : [],
        number ? numberArray : [],
        symbols ? symbolArray : [],
      ];
      const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
      const characters = shuffleArray(availableCharacters).slice(0, length);
      setHandelText(characters.join(""));
      return characters;
    };
    generateTheWord(length, uppercase, lowercase, number, symbols);
  }
  return (
    <>
      <header>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        />
      </header>
      <div className="container">
        <h4>Password Generator</h4>
        <div className="result-container">
          <input
            type="text"
            value={handelText}
            onChange={(e) => setHandelText(e.target.value)}
          ></input>

          <button
            className="btn"
            onClick={() => {
              if (handelText.length > 0) {
                navigator.clipboard.writeTest(handelText);
                setCopied(true);
                setInterval(() => {
                  setCopied(false);
                }, 2000);
              }
            }}
          >
            {Copied ? "Copied" : "Copy text"}
          </button>
        </div>
        <div className="settings">
          <div className="setting">
            <label>Password Length</label>
            <input
              type={"number"}
              id="length"
              min={"4"}
              max={"20"}
              value={word.length}
              onChange={(e) => setwordLength(e.target.value)}
            />
          </div>
          <div className="setting">
            <label>Include uppercase letter</label>
            <input
              type="checkbox"
              id="uppercase"
              value={word.uppercase}
              onChange={handelChangeUppercase}
            />
          </div>
          <div className="setting">
            <label>Include lowercase letter</label>
            <input
              type="checkbox"
              id="lowercase"
              value={word.lowercase}
              onChange={handelChangelowercase}
            />
          </div>
          <div className="setting">
            <label>Include number</label>
            <input
              type="checkbox"
              id="number"
              value={word.number}
              onChange={handelChangeNumber}
            />
          </div>
          <div className="setting">
            <label>Include symbols</label>
            <input
              type="checkbox"
              id="symbol"
              value={word.symbols}
              onChange={handelChangeSymbols}
            />
          </div>
        </div>
        <button className="btn" id="generate" onClick={generatepwd}>
          Generate Password
        </button>
      </div>
    </>
  );
}

export default Password;
