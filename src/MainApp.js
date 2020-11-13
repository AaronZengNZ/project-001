import React from "react";
import App from "./App";
import AppUpgrades from "./AppUpgrades";
import Inventory from "./Inventory/Inventory";
import SwitchBtn from "./SwitchBtn";
import "./App.css";

function MainApp() {
  return (
    <>
      <header className="App-header">
        {/* <SwitchBtn /> */}
        <App />
        <AppUpgrades />
        <div className="container">
          <Inventory />
        </div>
      </header>
    </>
  );
}

export default MainApp;
