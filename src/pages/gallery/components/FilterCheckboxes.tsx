import { useState } from "react";
import { Checkbox } from "./Checkbox";

interface Props {
  title: string;
  options: { label: string }[];
}

export const FilterCheckboxes = ({ title, options }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState(new Array(options.length).fill(false));

  const handleCheckboxChange = (position: number) => {
    const updatedState = state.map((item, index) =>
      index === position ? !item : item
    );
    setState(updatedState);
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
            <h3 className="filter-list-heading">{title}</h3>
            <span className={isOpen ? "button-up" : "button-down"}></span>
          </button>
        </legend>
        <ul className={isOpen ? "checkbox-list" : "checkbox-list-hidden"}>
          {options.map(({ label }, index) => (
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
