import React, { useEffect, useState } from "react";
import { Dog } from "../../../interfaces/Interfaces";
import { Link } from "react-router-dom";

interface Props {
  currentDog: Dog;
}

const GetParents: React.FC<Props> = ({ currentDog }) => {
  const [parents, setParents] = useState([]);
  const currentUrl =
    "http://aussiegalleri.se/api/singledog/getparents.php?url=" +
    currentDog.url;
  const baseUrl = "http://aussiegalleri.se/images/";

  useEffect(() => {
    async function fetchOffspring() {
      try {
        const response = await fetch(currentUrl);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data);
        setParents(data.parents);
      } catch (error) {
        console.error(error);
      }
    }
    fetchOffspring();
  }, [currentUrl]);

  return (
    <div>
      {parents && parents.length > 0 ? (
        <>
          <h3 className="dog-list-title">Föräldrar</h3>
          <ul className="grid grid-cols-1 gap-y-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-4">
            {parents?.map((parents: Dog) => (
              <li key={parents.dogID}>
                <Link to={`/dogs/${parents.url}`}>
                  <div className="aspect-ratio: auto w-full overflow-hidden m-round">
                    <img
                      src={baseUrl + parents.date + "/" + parents.standLeft}
                      alt=""
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <p className="dog-name">{parents.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default GetParents;
