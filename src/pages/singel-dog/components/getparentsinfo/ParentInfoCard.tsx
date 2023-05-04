import React from "react";
import { Litter } from "../../../../interfaces/Interfaces";

function ParentInfoCard(parents: Litter) {
  return (
    <div>
      <p className="inline-block py-px text-m font-semibold tracking-wider text-stone-900">
        e. {parents.sire}
      </p>
      <br></br>
      <p className="inline-block py-px text-m font-semibold tracking-wider text-stone-900">
        u. {parents.dam}
      </p>
      <p className="pt-4">Född: {parents.born}</p>
    </div>
  );
}

export default ParentInfoCard;
