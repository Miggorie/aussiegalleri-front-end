import React, { useEffect, useState } from "react";
import { Dog } from "../../../../interfaces/Interfaces";
import { Litter } from "../../../../interfaces/Interfaces";
import ParentInfoCard from "./ParentInfoCard";

interface Props {
  currentDog: Dog;
}

const GetParentsInfo: React.FC<Props> = ({ currentDog }) => {
  const [parents, setParents] = useState([]);
  const currentUrl =
    "https://aussiegalleri.se/api/singledog/litterinfo.php?url=" +
    currentDog.url;

  useEffect(() => {
    async function fetchParentsInfo() {
      try {
        const response = await fetch(currentUrl);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data);
        setParents(data.litter);
      } catch (error) {
        console.error(error);
      }
    }
    fetchParentsInfo();
  }, [currentDog.dogID]);

  return (
    <div>
      {parents?.map((parents: Litter) => (
        <div key={parents.litterID}>
          <ParentInfoCard
            dam={parents.dam}
            sire={parents.sire}
            born={parents.born}
            litterID={parents.litterID}
          ></ParentInfoCard>
        </div>
      ))}
    </div>
  );
};

export default GetParentsInfo;
