import React, { useState } from "react";

function SwitchBtn() {
  var [on, setOn] = useState(false);
  function inventoryBtnPress() {
    if (on) {
      setOn(false);
      return false;
    } else {
      setOn(true);
      return true;
    }
  }

  var btnStyle = {
    top: 10 + "px",
    left: 10 + "px",
  };

  return (
    <div>
      <button
        onClick={inventoryBtnPress}
        className="btn btn-sm btn-secondary"
        style={btnStyle}
      >
        {on ? "Back to game" : "Inventory"}
      </button>
    </div>
  );
}

export default SwitchBtn;
