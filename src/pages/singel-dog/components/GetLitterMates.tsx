import React, { useEffect, useState } from "react";
import { Dog } from "../../../interfaces/Interfaces";
import { Link } from "react-router-dom";

interface Props {
  currentDog: Dog;
}

const GetLitterMates: React.FC<Props> = ({ currentDog }) => {
  const [littermate, setLittermate] = useState([]);
  const currentUrl =
    "http://aussiegalleri.se/api/singledog/getlittermates.php?url=" +
    currentDog.url;
  const baseUrl = "http://aussiegalleri.se/images/thumbnails/";

  useEffect(() => {
    async function fetchLitterMate() {
      try {
        const response = await fetch(currentUrl);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setLittermate(data.littermates);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLitterMate();
  }, [currentUrl]);

  return (
    <div>
      {littermate && littermate.length > 0 ? (
        <>
          <h3 className="dog-list-title">Kullsyskon</h3>
          <div className="bg-white">
            <ul className="grid grid-cols-1 gap-y-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-4">
              {littermate?.map((littermate: Dog) => (
                <li key={littermate.dogID}>
                  <Link to={`/dogs/${littermate.url}`}>
                    <div className="aspect-ratio: auto w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-ratio:">
                      <img
                        src={
                          baseUrl + littermate.date + "/" + littermate.standLeft
                        }
                        alt=""
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <p className="dog-name">{littermate.name}</p>
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

export default GetLitterMates;
