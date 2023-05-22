import { Link } from "react-router-dom";
import useDogContext from "../../hooks/use-dog-context";
import { Dog } from "../../interfaces/Interfaces";
import { originIds, colorIds } from "./components/FilterID";
const { intersection } = require("lodash");

interface DogListProps {
  searchTerm: string;
  genderState: any;
  colorState: any;
  originState: any;
  ageState: any;
}

function DogList({
  searchTerm,
  genderState,
  colorState,
  originState,
  ageState,
}: DogListProps) {
  const { dogs } = useDogContext();

  let searchDogs = dogs;

  //Filtrering på kön

  let genderFilteredDogs = dogs;
  if (genderState[1] && genderState[0]) {
    genderFilteredDogs = dogs;
  } else if (genderState[1]) {
    genderFilteredDogs = genderFilteredDogs.filter(
      (dog) => dog.isBitch === "1"
    );
  } else if (genderState[0]) {
    genderFilteredDogs = genderFilteredDogs.filter(
      (dog) => dog.isBitch === "0"
    );
  }

  let ageFilteredDogs = dogs;
  if (ageState[1] && ageState[0]) {
    ageFilteredDogs = dogs;
  } else if (ageState[1]) {
    ageFilteredDogs = ageFilteredDogs.filter((dog) => dog.isPuppy === "0");
  } else if (ageState[0]) {
    ageFilteredDogs = ageFilteredDogs.filter((dog) => dog.isPuppy === "1");
  }

  let colorFilteredDogs = dogs;
  if (colorState.some((state: any) => state)) {
    colorFilteredDogs = colorFilteredDogs.filter((dog) => {
      return colorState.some((state: any, index: number) => {
        if (state && dog.colorID === colorIds[index]) {
          return true;
        }
        return false; // add a return statement
      });
    });
  }

  let originFilteredDogs = dogs;
  if (originState.some((state: any) => state)) {
    originFilteredDogs = originFilteredDogs.filter((dog) => {
      return originState.some((state: any, index: number) => {
        if (state && dog.originID === originIds[index]) {
          return true;
        }
        return false; // add a return statement
      });
    });
  }

  searchDogs = intersection(
    originFilteredDogs,
    genderFilteredDogs,
    colorFilteredDogs,
    ageFilteredDogs
  );

  // Filter dogs by search term
  if (searchTerm && searchTerm !== "") {
    // Parse search term as HTML and extract plain text content
    const parser = new DOMParser();
    const parsedSearchTerm = parser
      .parseFromString(searchTerm, "text/html")
      .body.textContent?.toLowerCase();

    searchDogs = searchDogs.filter((dog) => {
      const name = dog.name?.toLowerCase();
      for (let i = 0; i < (parsedSearchTerm?.length || 0); i++) {
        if (name?.charAt(i) !== parsedSearchTerm?.charAt(i)?.toLowerCase()) {
          return false;
        }
      }
      return true;
    });
  }

  const baseUrl = "http://aussiegalleri.se/images/";

  return (
    <div>
      <ul className="dog-ul">
        {searchDogs?.map((searchDog: Dog) => (
          <li key={searchDog.url} className="group">
            <Link to={`/dogs/${searchDog.url}`}>
              <div className="">
                <img
                  src={baseUrl + searchDog.date + "/" + searchDog.standLeft}
                  alt=""
                />
              </div>
              <p className="dog-name">{searchDog.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogList;
