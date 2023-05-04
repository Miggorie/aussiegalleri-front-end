import { useState, useEffect } from "react";
import { CountDogs } from "../../../interfaces/Interfaces";
import axios from "axios";

const OtherStatistic = () => {
  const [dogcount, setDogcount] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://aussiegalleri.se/api/statistics/statistics.php"
        );
        const data = response.data;
        console.log(data);
        setDogcount(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const renderDogs = (dogcount: CountDogs[]) => {
    return dogcount.map((dogcount: CountDogs) => (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
              {dogcount.total_adults}
              <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                Vuxna hundar
              </p>
            </h6>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
              {dogcount.total_pups}
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Hundar under 1 år
            </p>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
              {dogcount.total_females}
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Tikar
            </p>
          </div>
          <div className="text-center">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
              {dogcount.total_males}
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Hanar
            </p>
          </div>
        </div>
      </div>
    ));
  };

  return <div>{renderDogs(dogcount)}</div>;
};

export default OtherStatistic;
