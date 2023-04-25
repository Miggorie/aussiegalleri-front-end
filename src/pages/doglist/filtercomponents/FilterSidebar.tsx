import React, { useState, useEffect } from "react";
import "./scss/filter-style.css";
import {
  Filters,
  SortOption,
  SubCategories,
} from "../../../components/Interfaces";

interface CheckboxStatus {
  [key: string]: boolean;
}

const FilterSidebar = ({
  checkboxStatus,
  handleCheckboxChange,
}: {
  checkboxStatus: CheckboxStatus;
  handleCheckboxChange: (label: string, checked: boolean) => void;
}) => {
  const [showOptions, setShowOptions] = useState(-1);

  const handleClick = (
    index: number,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setShowOptions((current) => {
      if (current === index) {
        return -1;
      } else {
        return index;
      }
    });
  };

  const sortOptions: SortOption[] = [
    {
      name: "Bokstavsordning",
      href: "http://localhost:8888/dogs",
      current: true,
    },
    { name: "Nyast i galleriet", href: "#", current: false },
    { name: "Äldst i galleriet", href: "#", current: false },
  ];
  const subCategories: SubCategories[] = [
    { name: "Alla hundar", href: "http://localhost:8888/dogs" },
    { name: "Vuxna hundar", href: "#" },
    { name: "Valpar", href: "#" },
  ];
  const filters: Filters[] = [
    {
      id: "sex",
      name: "Kön",
      options: [
        { value: "tik", label: "Tik", checked: true },
        { value: "hane", label: "Hane", checked: true },
      ],
    },
    {
      id: "color",
      name: "Färg",
      options: [
        { value: "black-tre", label: "Svart trefärgad", checked: false },
        { value: "red-tri", label: "Röd trefärgad", checked: false },
        { value: "blue-tan", label: "Blue merle med tan", checked: false },
        { value: "brown", label: "Brown", checked: false },
        { value: "green", label: "Green", checked: false },
        { value: "purple", label: "Purple", checked: false },
      ],
    },
    {
      id: "category",
      name: "Ursprungsland",
      options: [
        { value: "sverige", label: "Sverige", checked: false },
        { value: "norge", label: "Norge", checked: false },
        { value: "finland", label: "Finland", checked: false },
        { value: "italien", label: "Italien", checked: false },
        { value: "usa", label: "USA", checked: false },
      ],
    },
  ];

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
                    <div key={option.value} className="filter-checkbox">
                      <input
                        type="checkbox"
                        name={option.label}
                        checked={checkboxStatus[option.label]}
                        onChange={(e) =>
                          handleCheckboxChange(option.label, e.target.checked)
                        }
                      />
                      <label htmlFor={option.label}>{option.label}</label>
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
};
export default FilterSidebar;
