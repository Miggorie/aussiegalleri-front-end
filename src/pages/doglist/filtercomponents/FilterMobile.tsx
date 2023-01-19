import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { filters, subCategories } from "./FilterCategories";
import { FilterBarProps, SearchBarProps } from "../../../components/Interfaces";
import { FilterProps } from "../../../components/Interfaces";

const FilterList: React.FC<FilterBarProps> = ({ onChange }) => {
  const [filterTerm, setFilterTerm] = useState<FilterProps[]>([]);

  let filterFunction: FilterProps[] = [];
  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, name } = event.currentTarget;
    setFilterTerm((filterTerm) => {
      console.log("THIS IS LOGGED");
      return filterTerm.map((filter) => {
        if (filter.name === name) {
          filter.options = filter.options.map((option) => {
            if (option.value === value) {
              option.checked = !option.checked;
              console.log("THIS IS NOT LOGGED");
            }
            return option;
          });
        }
        return filter;
      });
    });
  };

  useEffect(() => {
    onChange(filterTerm);
  }, []);

  return (
    <div>
      {/* Filters */}
      <form className="mt-4 border-t border-gray-200">
        <h3 className="sr-only">Kategorier</h3>
        <ul role="list" className="px-2 py-3 font-medium text-gray-900">
          {subCategories.map((category) => (
            <li key={category.name}>
              <a href={category.href} className="block px-2 py-3">
                {category.name}
              </a>
            </li>
          ))}
        </ul>

        {filters.map((section) => (
          <Disclosure
            as="div"
            key={section.id}
            className="border-t border-gray-200 px-4 py-6"
          >
            {({ open }) => (
              <>
                <h3 className="-mx-2 -my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      {section.name}
                    </span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel className="pt-6">
                  <div className="space-y-6">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          onChange={handleFilter}
                          id={`filter-mobile-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          defaultChecked={option.checked}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                          className="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </form>
      ;
    </div>
  );
};

export default FilterList;
