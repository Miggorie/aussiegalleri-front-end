import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useDogContext from "../../hooks/use-dog-context";
import GetLitterMates from "./components/GetLitterMates";
import GetParentsInfo from "./components/getparentsinfo/GetParentsInfo";
import GetOffspring from "./components/GetOffspring";
import GetParents from "./components/GetParents";

//base URL for the images, its used to add the curretDog in return-section.
const baseUrl = "http://aussiegalleri.se/images/";

const SingleDog = () => {
  const { name } = useParams();
  const { fetchData, dogs } = useDogContext();

  const currentDog = dogs.find((dog) => dog.url === name);

  useEffect(() => {
    fetchData();
  }, []);

  if (currentDog) {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <div className="bg-stone-100 rounded-lg pt-10 pl-10 pb-10">
              <h1 className="mb-4 text-4xl font-extrabold leading-none pb-4">
                {currentDog.name}
                <br className="hidden md:block" />
              </h1>
              <br></br>
              <GetParentsInfo
                key={currentDog.litterID}
                currentDog={currentDog}
              />
              <p>Kön: {currentDog.gender}</p>
              <p>Regnummer: {currentDog.regnr}</p>
              <br></br>
              <p>
                Fotograferad den {currentDog.date} i {currentDog.place}
              </p>
            </div>
            {/* <hr className="mb-5 border-gray-300" /> */}

            <div className="grid gap-10 mt-8 lg:grid-cols-1">
              <img
                className="m-round"
                src={baseUrl + currentDog.date + "/" + currentDog.standRight}
                alt={currentDog.name + " står uppställd åt höger"}
              />
              <img
                className="m-round"
                src={baseUrl + currentDog.date + "/" + currentDog.standLeft}
                alt={currentDog.name + " står uppställd åt vänster"}
              />
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-90 lg:mt-4 sm:mt-4 rounded-lg shadow-lg sm:h-90"
              src={baseUrl + currentDog.date + "/" + currentDog.headShot}
              alt={currentDog.name + " huvudporträtt framifrån"}
            />
          </div>
        </div>
        <h2 className="bg-stone-100 py-14 b-4 mt-14 text-4xl font-extrabold leading-none text-center">
          Släktingar i galleriet
        </h2>
        <GetParents key={currentDog.name} currentDog={currentDog} />
        <GetLitterMates key={currentDog.dogID} currentDog={currentDog} />
        <GetOffspring key={currentDog.standRight} currentDog={currentDog} />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default SingleDog;
