import React, { useState } from "react";
import "./scss/filter-style.css";
import {
  FilterOption,
  Filters,
  SortOption,
  SubCategories,
} from "../../../components/Interfaces";

function FilterSidebar(props: {
  sortOptions: SortOption[];
  subCategories: SubCategories[];
  filters: Filters[];
}) {
  const { subCategories, filters } = props;
  const [showOptions, setShowOptions] = useState(-1);
  const [checkboxStatus, setCheckboxStatus] = useState<{
    [key: string]: boolean;
  }>({});

  const handleClick = (
    index: number,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault(); // Prevent form submission
    console.log("test");
    setShowOptions((current) => {
      if (current === index) {
        return -1;
      } else {
        return index;
      }
    });
  };
  const handleChange = (optionLabel: string) => {
    setCheckboxStatus((prevStatus) => {
      return { ...prevStatus, [optionLabel]: !prevStatus[optionLabel] };
    });
  };

  return (
    <div>
      <form className="filter-sidebar-container">
        <h2 className="h2">Filtrera</h2>
        <ul>
          {subCategories.map((subCategory) => (
            <li className="filter-subcategory" key={subCategory.name}>
              <a href={subCategory.href}>{subCategory.name}</a>
            </li>
          ))}
        </ul>
        <div className="filter-all-container">
          {filters.map((filter, index: number) => (
            <fieldset
              className="filtrering-checkbox-container"
              key={filter.name}
            >
              <legend>
                <button
                  className="filter-button"
                  onClick={(event) => handleClick(index, event)}
                >
                  {filter.name}
                </button>
              </legend>
              {showOptions === index && (
                <div className="filtrering-checkboxar">
                  {filter.options.map((option) => (
                    <div key={option.label} className="filter-checkbox">
                      <input
                        type="checkbox"
                        id={option.value}
                        checked={checkboxStatus[option.label] || false}
                        onChange={() => {
                          handleChange(option.label);
                        }}
                      />
                      <label htmlFor={option.value}>{option.label}</label>
                    </div>
                  ))}
                </div>
              )}
            </fieldset>
          ))}
        </div>
      </form>
    </div>
  );
}
export default FilterSidebar;
