import React, { useState, useEffect } from "react";
import flying_ball1 from "./flyingBall/flying_ball1.png";
import flying_ball2 from "./flyingBall/flying_ball2.png";
import flying_ball3 from "./flyingBall/flying_ball3.png";
import flying_ball4 from "./flyingBall/flying_ball4.png";
import flying_ball5 from "./flyingBall/flying_ball5.png";
import flying_ball6 from "./flyingBall/flying_ball6.png";
import flying_ball7 from "./flyingBall/flying_ball7.png";
import flying_ball8 from "./flyingBall/flying_ball8.png";
import "./App.css";

export default function AppUpgrades() {
  var [dmg, setDmg] = useState(0);
  var [costume, setCostume] = useState(1);
  var [img, setImg] = useState("");
  var [stage, setStage] = useState(1);
  var [points, setPoints] = useState(0);
  var [part, setPart] = useState(1);
  var hpArr = [
    0,
    5,
    10,
    20,
    30,
    45,
    60,
    75,
    100,
    130,
    170,
    250,
    400,
    700,
    1000,
    1600,
    2500,
    4800,
    7000,
    11000,
    18000,
    30000,
    50000,
    80000,
    140000,
  ];
  var [hp, setHp] = useState(hpArr[stage]);
  var [isClick, setIsClick] = useState(0);

  var flyingBalls = [
    flying_ball1,
    flying_ball2,
    flying_ball3,
    flying_ball4,
    flying_ball5,
    flying_ball6,
    flying_ball7,
    flying_ball8,
  ];

  function incrementPoints(amount) {
    setPoints(points + amount * 2);
    return true;
  }

  function calIncrementionPoints() {
    incrementPoints(hpArr[stage] / 10);
  }

  function incrementPart() {
    setPart(part + 1);
  }

  function NextCostume() {
    if (costume === 8) {
      setCostume(1);
    } else {
      setCostume(costume + 1);
    }
    setImg(flyingBalls[costume - 1]);
    if (costume === 6) {
      setHp(hp - 1);
      if (hp <= 1) {
        calIncrementionPoints();
        incrementPart();
        console.log(part);
        if (part >= 10) {
          setStage(stage + 1);
          setHp(hpArr[stage + 1]);
          setDmg(dmg + 1);
          setPart(1);
        } else {
          setHp(hpArr[stage]);
        }
      }
    }
  }

  function ImgClick() {
    setIsClick(3);

    window.setTimeout(() => {
      setIsClick(1);
    }, 150);
  }

  window.setTimeout(() => {
    NextCostume();
  }, 500 / (4 + dmg * dmg) / (isClick + 1));

  useEffect(() => {
    setDmg(1);
  }, []);

  return (
    <>
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3>Stats:</h3>
              {/* <h4>Dmg: {dmg}</h4> */}
              <h4>Points: {points}</h4>
            </div>
            <div className="col-md-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <h3>
                      Stage {stage} | {part}/10
                    </h3>
                  </div>
                  <div className="col-md-4">
                    <h5>
                      {hp}/{hpArr[stage]}
                      <br />
                      <small>
                        {" "}
                        DPS: {Math.round(800 / (500 / (4 + dmg * dmg))) / 10}
                      </small>
                    </h5>
                  </div>
                  <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-6">
                      <img src={img} onClick={ImgClick}></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
