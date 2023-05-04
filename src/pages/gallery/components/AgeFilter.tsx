import { useState } from "react";
import { Checkbox } from "./Checkbox";
import { ageOptions } from "./FilterOptions";

interface Props {
  onChange: (selected: boolean[]) => void;
}

export const AgeFilter = ({ onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState(new Array(ageOptions.length).fill(false));

  const handleCheckboxChange = (position: number) => {
    const updatedState = state.map((item, index) =>
      index === position ? !item : item
    );
    setState(updatedState);
    onChange(updatedState);
  };

  return (
    <fieldset>
      <div className="filter-all-container">
        <legend className="button-container">
          <button
            className="accordion-button"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <h3 className="filter-list-heading">Ålder</h3>
            <span className={isOpen ? "button-up" : "button-down"}></span>
          </button>
        </legend>
        <ul className={isOpen ? "checkbox-list" : "checkbox-list-hidden"}>
          {ageOptions.map(({ label }, index) => (
            <li key={index}>
              <Checkbox
                label={label}
                state={state[index]}
                onChange={() => handleCheckboxChange(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    </fieldset>
  );
};
