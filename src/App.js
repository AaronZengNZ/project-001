import React, { useState, useEffect } from "react";
import wand1 from "./wands/1.png";
import wand2 from "./wands/2.png";
import wand3 from "./wands/3.png";
import wand4 from "./wands/4.png";
import wand5 from "./wands/5.png";
import wand6 from "./wands/6.png";
import "./App.css";

function App() {
  var [spinSpeed, setSpinSpeed] = useState(1);
  var [wandName, setWandName] = useState("");
  var [wandNames, setWandNames] = useState([]);
  var wandTypes = [wand1, wand2, wand3, wand4, wand5, wand6];
  var [wandUrl, setWandUrl] = useState("");

  function wands(wandNum) {
    return wandTypes[wandNum - 1];
  }

  function randomWand() {
    var wandNum = Math.floor(Math.random() * wandTypes.length) + 1;
    var wand = wands(Math.floor(Math.random() * wandTypes.length) + 1);
    var wandArr = [wandNum, wand];
    console.log("num:" + wandNum);
    console.log("wnd:" + wand);
    console.log(wandArr);
    return wandArr;
  }

  var [wandNum, setWandNum] = useState(wand1);

  var [wandNumber, setWandNumber] = useState(0);

  function getWandNames(input) {
    var i = 0;
    var returnedWands = [];
    var returnedWand = "";
    var wandNamesByLvl = [
      "Tiny",
      "Glowing",
      "Thicc",
      "Red",
      "Old",
      "Very Thicc",
    ];
    var wandNames = [
      "Redwood",
      "Milk",
      "Magical",
      "Pixelated",
      "Dragonsilk",
      "Elderwood",
      "Fairy",
      "Birch",
      "Oak",
      "Thicc",
      "Shiny",
    ];
    var wandLooks = [
      "Stick",
      "Wand",
      "Thicc",
      "Branch",
      "Pencil",
      "Stick",
      "Wand",
      "Stick",
      "Wand",
      "Branch",
      "Branch",
    ];
    console.log(
      `Chance to get 'thicc thicc thicc': ${
        100 / (wandNamesByLvl.length * wandNames.length * wandLooks.length)
      }`
    );
    while (i < input.length) {
      returnedWand =
        wandNamesByLvl[
          Math.floor(Math.random() * (wandNamesByLvl.length - 1))
        ] +
        " " +
        wandNames[Math.floor(Math.random() * (wandNames.length - 1))] +
        " " +
        wandLooks[Math.floor(Math.random() * (wandLooks.length - 1))];
      returnedWands.push(returnedWand);
      i++;
    }

    return returnedWands;
  }

  function setRandomWand() {
    console.log(wandNum);
    if (wandNum) {
      var [settedWandNum, settedWand] = randomWand();
      setWandNum(settedWand);
      setWandUrl(settedWand);
      setWandNumber(settedWandNum);
      setWandNames(getWandNames(wandTypes));
      setWandName(getWandNames(wandTypes)[wandNumber]);
      return true;
    } else {
      return null;
    }
  }

  function increaseSpeed() {
    setSpinSpeed(spinSpeed++);
  }

  function handleInputChange(event) {
    let value = event.target.value;
    if (value >= 10000) {
      if (value >= 1000000000) {
        value = 10000;
      } else {
        value = value / 100;
      }
    }
    setSpinSpeed(value);
  }

  function decreaseSpeed() {
    setSpinSpeed(spinSpeed--);
  }

  useEffect(() => {
    console.log(spinSpeed);
  }, [spinSpeed]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col">
              <br></br>
              <img
                src={wandUrl ? wandUrl : wandNum}
                className=""
                alt="logo"
                style={{
                  animation: `App-logo-spin infinite ${10 / spinSpeed}s linear`,
                }}
              />
              <br></br>
              <br></br>
              <h3 className="text-secondary">
                {wandName ? wandName : "Unamed Wand"}
              </h3>
              <h6 className="text-secondary">
                <small>
                  You have a 0.14% chance to get the rarest item name in the
                  game.
                </small>
              </h6>
              <h6 className="text-secondary">
                <small>Keep on trying!</small>
              </h6>
              <h6 className="text-secondary">
                <small>
                  <small>
                    <small>Hint: It involves 'Thicc'</small>
                  </small>
                </small>
              </h6>
            </div>
            <div className="col">
              <button
                className="btn btn-secondary btn-sm"
                onClick={increaseSpeed}
              >
                Increment Speed
              </button>
              <h6> </h6>
              <button
                className="btn btn-secondary btn-sm"
                onClick={decreaseSpeed}
              >
                Decrement Speed
              </button>
              <h6> </h6>
              <button
                className="btn btn-secondary btn-sm"
                onClick={setRandomWand}
              >
                Random Wand
              </button>
              <h6> </h6>
              <form>
                <div className="form-row">
                  <div className="col-md-4"></div>
                  <div className="col-md-4">
                    <label className="text-secondary">Spin Speed</label>
                    <input
                      type="number"
                      className="form-control text-primary"
                      placeholder={spinSpeed}
                      onChange={handleInputChange}
                      max="3333333"
                      min="0"
                    ></input>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
