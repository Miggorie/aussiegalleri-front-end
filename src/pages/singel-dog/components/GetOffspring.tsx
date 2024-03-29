import React, { useEffect, useState } from "react";
import { Dog } from "../../../interfaces/Interfaces";
import { Link } from "react-router-dom";

interface Props {
  currentDog: Dog;
}

const GetOffspring: React.FC<Props> = ({ currentDog }) => {
  const [offspring, setOffspring] = useState([]);
  const currentUrl =
    "https://aussiegalleri.se/api/singledog/getoffsprings.php?url=" +
    currentDog.url;
  const baseUrl = "https://aussiegalleri.se/images/thumbnails/";

  useEffect(() => {
    async function fetchOffspring() {
      try {
        const response = await fetch(currentUrl);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data);
        setOffspring(data.offspring);
      } catch (error) {
        console.error(error);
      }
    }
    fetchOffspring();
  }, [currentUrl]);

  return (
    <div>
      {offspring && offspring.length > 0 ? (
        <>
          <h3 className="dog-list-title">Avkommor</h3>
          <div className="bg-white">
            <ul className="grid grid-cols-1 gap-y-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-4">
              {offspring?.map((offspring: Dog) => (
                <li key={offspring.dogID}>
                  <Link to={`/dogs/${offspring.url}`}>
                    <div className="aspect-ratio: auto w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-ratio:">
                      <img
                        src={
                          baseUrl + offspring.date + "/" + offspring.standLeft
                        }
                        alt="hund"
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <p className="dog-name">{offspring.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default GetOffspring;
