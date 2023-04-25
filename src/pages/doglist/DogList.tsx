import React, { useState, useEffect, SetStateAction } from "react";
import useDogContext from "../../hooks/use-dog-context";
import { Dog, Filters } from "../../components/Interfaces";

interface DogListProps {
  searchTerm: string;
  checkboxStatus: { [key: string]: boolean };
}

function DogList({ searchTerm, checkboxStatus }: DogListProps) {
  const { dogs } = useDogContext();
  let searchDogs = dogs;
  // const filteredDogs = filterDogs(checkboxStatus);

  const areAllTrue = Object.values(checkboxStatus).every(
    (value) => value === true
  );

  if (areAllTrue) {
    console.log(checkboxStatus);
  }

  // Filter dogs by search term
  if (searchTerm && searchTerm !== "") {
    searchDogs = searchDogs.filter((dog) =>
      dog.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const baseUrl = "http://aussiegalleri.se/images/thumbnails/";

  return (
    <div>
      <div className="bg-white">
        <h2 className="sr-only">Hundar</h2>
        <div className="grid grid-cols-1 gap-y-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-4">
          {searchDogs?.map((searchDog: Dog) => (
            <a
              key={searchDog.dogID}
              href={`/dogs/${searchDog.url}`}
              className="group"
            >
              <div className="aspect-ratio: auto w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-ratio:">
                <img
                  src={baseUrl + searchDog.date + "/" + searchDog.standLeft}
                  alt="hund"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 mb-10 text-s text-gray-700">
                {searchDog.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DogList;
