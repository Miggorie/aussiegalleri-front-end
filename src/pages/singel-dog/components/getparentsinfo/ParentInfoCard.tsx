import React from "react";
import { Litter } from "../../../../interfaces/Interfaces";

function ParentInfoCard(parents: Litter) {
  return (
    <div>
      <div className="parents-container">
        <p className="parents-name">e. {parents.sire}</p>
        <p className="parents-name">u. {parents.dam}</p>
      </div>
      <p>
        <span className="dog-info-title">Född:</span> {parents.born}
      </p>
    </div>
  );
}

export default ParentInfoCard;
