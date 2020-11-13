import React, { useState } from "react";
import InventoryData from "./InventoryData";
import InventorySlot from "./inventorySlot";
import "../App.css";

function Inventory() {
  var [equippedArrItems, changeEquippedArrItems] = useState([]);
  var [equippedArr, changeEquippedArr] = useState([]);
  // InventoryData.map((data) => {
  //   if (data.isWand === true) {
  //     var concatCloneOfEquippedArrItems = equippedArrItems.concat();
  //     concatCloneOfEquippedArrItems.push(data.id);
  //     var concatCloneOfEquippedArr = equippedArr.concat();
  //     concatCloneOfEquippedArr.push(false);
  //     changeEquippedArr(concatCloneOfEquippedArr);
  //     changeEquippedArrItems(concatCloneOfEquippedArrItems);
  //   }
  // });
  const clickEquipWandBtnHandler = (id, isEquipped) => {
    var concatCloneOfEquippedArr = equippedArr.concat();
    var indexOfId = equippedArrItems.findIndex(id);
    concatCloneOfEquippedArr[indexOfId] = !isEquipped;
    changeEquippedArr(concatCloneOfEquippedArr);
  };

  console.log(clickEquipWandBtnHandler);

  return (
    <div className="mt-5 text-secondary text-center">
      <h2 className="m-5">Inventory</h2>
      <div className="m-2">
        <div className="row">
          {InventoryData.map((data) => {
            console.log("clickEquipWandBtnHandler data:", data);
            return (
              <div key={data.id} className="col p-0">
                <InventorySlot
                  data={data}
                  clickEquipWandBtnHandler={clickEquipWandBtnHandler}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Inventory;
