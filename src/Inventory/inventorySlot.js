import React from "react";
import EquipWandBtn from "./EquipWandBtn";

export default function InventorySlot(props, clickHandler) {
  var { itemName, itemCount, itemDescription, isEquipped } = props.data;
  console.log(clickHandler);
  return (
    <>
      <div className="card bg-dark">
        <div className="card-body ">
          <h5 className="card-title">{itemName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {itemCount ? itemCount : "None"}
          </h6>
          <h6 className="card-text">
            <small>{itemDescription}</small>
          </h6>
          {props.data.isWand === true ? (
            <EquipWandBtn
              data={props.data}
              clickHandler={clickHandler}
              isEquipped={isEquipped}
            />
          ) : (
            <div>
              <h1 className="mt-5"> </h1>
              <h6 className="mt-1"> </h6>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
