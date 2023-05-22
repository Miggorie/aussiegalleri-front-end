import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useDogContext from "../../hooks/use-dog-context";
import GetLitterMates from "./components/GetLitterMates";
import GetParentsInfo from "./components/getparentsinfo/GetParentsInfo";
import GetOffspring from "./components/GetOffspring";
import GetParents from "./components/GetParents";
import logo from "../../images/aussie-logo.png";

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
      <div className="single-dog-main">
        <div className="info-card">
          <div className="info-container">
            <h1>
              {currentDog.name}
              <br className="hidden md:block" />
            </h1>
            <GetParentsInfo key={currentDog.litterID} currentDog={currentDog} />
            <p className="dog-info-p">
              <span className="dog-info-title">Kön:</span> {currentDog.gender}
            </p>
            <p className="dog-info-p">
              <span className="dog-info-title">Regnummer:</span>{" "}
              {currentDog.regnr}
            </p>
            <p className="photo-date-p">
              Fotograferad den {currentDog.date} i {currentDog.place}
            </p>
          </div>
          <img className="aussie-logo" src={logo} alt="" />
        </div>
        <div className="singel-dog-container">
          <div>
            <img
              className="single-dog-img"
              src={baseUrl + currentDog.date + "/" + currentDog.standRight}
              alt={currentDog.name + " står uppställd åt höger"}
            />
            <img
              className="single-dog-img"
              src={baseUrl + currentDog.date + "/" + currentDog.standLeft}
              alt={currentDog.name + " står uppställd åt vänster"}
            />
          </div>
          <img
            className="single-dog-head-img"
            src={baseUrl + currentDog.date + "/" + currentDog.headShot}
            alt={currentDog.name + " huvudporträtt framifrån"}
          />
        </div>
        <h2 className="relatives-card">Släktingar i galleriet</h2>
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
