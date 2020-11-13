import React from "react";

function EquipWandBtn(data, clickHandler, isEquipped) {
  var { id } = data.data;
  console.log(data.data.id);
  console.log(clickHandler);

  return (
    <small>
      <button
        onClick={clickHandler(id, isEquipped)}
        className="btn btn-small btn-secondary text-dark"
      >
        {isEquipped ? "Equipped" : "Equip Wand"}
      </button>
    </small>
  );
}

export default EquipWandBtn;
