import React from "react";

function EquipWandBtn(data, isEquipped) {
  var { id } = data.data;
  var clickEquipWandBtnHandler = data.clickEquipWandBtnHandler;
  console.log("EquipWandBtn", data.data);
  console.log("EquipWandBtn func", data.clickEquipWandBtnHandler);

  return (
    <small>
      <button
        onClick={clickEquipWandBtnHandler(id, isEquipped)}
        className="btn btn-small btn-secondary text-dark"
      >
        {isEquipped ? "Equipped" : "Equip Wand"}
      </button>
    </small>
  );
}

export default EquipWandBtn;
