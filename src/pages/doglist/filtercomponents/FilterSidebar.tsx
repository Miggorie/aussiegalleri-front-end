import { useState } from "react";
import { genderOptions, colorOptions, originOptions } from "./FilterOptions";
import { Checkbox } from "./Checkbox";
import DogPage from "../DogPage";

const renderListItems = (
  options: { label: string }[],
  state: boolean[],
  onChange: (position: number) => void
) =>
  options.map(({ label }, index) => (
    <li key={index}>
      <Checkbox
        label={label}
        state={state[index]}
        onChange={() => onChange(index)}
      />
    </li>
  ));

export default function FilterSidebar() {
  const [genderState, setGenderState] = useState(
    new Array(genderOptions.length).fill(false)
  );
  const [colorState, setColorState] = useState(
    new Array(colorOptions.length).fill(false)
  );
  const [originState, setOriginState] = useState(
    new Array(originOptions.length).fill(false)
  );

  const handleGenderChange = (position: number) => {
    const updatedGenderState = genderState.map((item, index) =>
      index === position ? !item : item
    );
    setGenderState(updatedGenderState);
  };

  const handleColorChange = (position: number) => {
    const updatedColorState = colorState.map((item, index) =>
      index === position ? !item : item
    );
    setColorState(updatedColorState);
  };

  const handleOriginChange = (position: number) => {
    const updatedOriginState = originState.map((item, index) =>
      index === position ? !item : item
    );
    setOriginState(updatedOriginState);
  };

  return (
    <div className="App">
      <h3>Kön</h3>
      <ul className="toppings-list">
        {renderListItems(genderOptions, genderState, handleGenderChange)}
      </ul>
      <h3>Färg</h3>
      <ul className="toppings-list">
        {renderListItems(colorOptions, colorState, handleColorChange)}
      </ul>
      <h3>Ursprung</h3>
      <ul className="toppings-list">
        {renderListItems(originOptions, originState, handleOriginChange)}
      </ul>
      <DogPage
        genderState={genderState}
        colorState={colorState}
        originState={originState}
      />
    </div>
  );
}
