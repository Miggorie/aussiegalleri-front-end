import { useState, useEffect } from "react";
import { CountDogs } from "../../../interfaces/Interfaces";
import axios from "axios";

const AllDogStatistics = () => {
  const [dogcount, setDogcount] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://aussiegalleri.se/api/statistics/statistics.php"
        );
        const data = response.data;
        setDogcount(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col lg:items-center lg:flex-row">
        <div className="all-statistics-text flex items-center mb-6 lg:w-1/2 lg:mb-0">
          <div className="hund-ikon flex items-center justify-center w-16 h-16 mr-5 rounded-full bg-stone-300 sm:w-24 sm:h-24 xl:mr-10 xl:w-28 xl:h-28">
            <svg
              aria-hidden="true"
              className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16 xl:w-20 xl:h-20"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          {dogcount?.map((dogcount: CountDogs) => (
            <div key={dogcount.total_dogs}>
              <h2>{dogcount.total_dogs}</h2>
              <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                Aussies i galleriet
              </p>
            </div>
          ))}
        </div>
        <div className="lg:w-1/2">
          <p className="text-gray-800">
            Sedan 2015 har vi fotograferat Australian Shepherds runt om i hela
            landet. Arbetet drivs av eldsjälar som annordnar aussieträffar eller
            möter upp enskilda individer när möjligheten ges.
          </p>
          <br />
          <p>Vi är stolta och glada över alla hundar i galleriet!</p>
        </div>
      </div>
    </div>
  );
};

export default AllDogStatistics;
