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
        setDogcount(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const renderDogs = (dogcount: CountDogs[]) => {
    return dogcount.map((dogcount: CountDogs) => (
      <div key={dogcount.total_adults}>
        <div className="other-statistics-container">
          <div className="other-statistics-text">
            <h3>{dogcount.total_adults}</h3>
            <p>Vuxna hundar</p>
          </div>
          <div className="other-statistics-text">
            <h3>{dogcount.total_pups}</h3>
            <p>Under 1 år</p>
          </div>
          <div className="other-statistics-text">
            <h3>{dogcount.total_females}</h3>
            <p>Tikar</p>
          </div>
          <div className="other-statistics-text">
            <h3>{dogcount.total_males}</h3>
            <p>Hanar</p>
          </div>
        </div>
      </div>
    ));
  };

  return <div>{renderDogs(dogcount)}</div>;
};

export default OtherStatistic;
