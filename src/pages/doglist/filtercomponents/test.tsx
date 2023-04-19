import React, { useState } from "react";
import "../../testStyles.css";
import {
  FilterOption,
  Filters,
  SortOption,
  SubCategories,
} from "../../../components/Interfaces";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

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

  const handleClick = (index: number) => {
    setShowOptions((current) => {
      if (current === index) {
        return -1;
      } else {
        return index;
      }
    });
  };

  return (
    <div>
      <form>
        <h2>Filtrera</h2>
        <ul>
          {subCategories.map((subCategory, index: number) => (
            <li key={subCategory.name}>
              <a href={subCategory.href}>{subCategory.name}</a>
            </li>
          ))}
        </ul>
        <ul>
          {filters.map((filter, index: number) => (
            <li key={filter.name}>
              <button onClick={() => handleClick(index)}>{filter.name}</button>

              {showOptions === index && (
                <div className="border-b p-5 rounded">
                  {filter.options.map((option) => (
                    <div key={option.label}>
                      <input
                        type="checkbox"
                        checked={checkboxStatus[option.label] || false}
                        onChange={() => {
                          setCheckboxStatus((prevStatus) => {
                            const updatedStatus = { ...prevStatus };
                            updatedStatus[option.label] =
                              !prevStatus[option.label];
                            return updatedStatus;
                          });
                        }}
                      />
                      <label>{option.label}</label>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
export default FilterSidebar;
