import { useState } from "react";
import { Filters } from "../interfaces/Interfaces";

export default function useCheckbox(filterValues: Filters[]) {
  const [checkboxStatus, setCheckboxStatus] = useState(filterValues);

  function handleCheckboxChange(name: string, label: string, checked: boolean) {
    setCheckboxStatus((prevState) => {
      const updatedFilters = [...prevState];
      const filterIndex = updatedFilters.findIndex(
        (filter) => filter.name === name
      );
      const optionIndex = updatedFilters[filterIndex].options.findIndex(
        (option) => option.label === label
      );
      updatedFilters[filterIndex].options[optionIndex].checked = checked;
      return updatedFilters;
    });
  }

  return { checkboxStatus, handleCheckboxChange };
}
