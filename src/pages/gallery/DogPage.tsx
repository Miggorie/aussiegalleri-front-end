import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import SearchBar from "./SearchBar";
import DogList from "./DogList";
import {
  genderOptions,
  colorOptions,
  originOptions,
} from "./filtercomponents/FilterOptions";
import { Checkbox } from "./filtercomponents/Checkbox";

const renderListItems = (
  options: { label: string }[],
  state: boolean[],
  onChange: (position: number, label: string) => void
) =>
  options.map(({ label }, index) => (
    <li key={index}>
      <Checkbox
        label={label}
        state={state[index]}
        onChange={() => onChange(index, label)}
      />
    </li>
  ));

function DogPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [genderState, setGenderState] = useState(
    new Array(genderOptions.length).fill(false)
  );
  const [colorState, setColorState] = useState(
    new Array(colorOptions.length).fill(false)
  );
  const [originState, setOriginState] = useState(
    new Array(originOptions.length).fill(false)
  );

  const handleGenderChange = (position: number, label: string) => {
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
    <div>
      <div className="bg-white">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Stäng menyn</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline border-b border-stone-200 pt-14 pb-8">
              <h1 className="text-2xl font-semibold">Aussiegalleriet</h1>
              <div className="w-5/6">
                <SearchBar
                  onChange={(filterTerm) => setSearchTerm(filterTerm)}
                />
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                ></button>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filtrera</span>
                  <FunnelIcon
                    className="h-5 w-5 text-stone-500"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <div className="App">
                  <h3>Kön</h3>
                  <ul className="toppings-list">
                    {renderListItems(
                      genderOptions,
                      genderState,
                      handleGenderChange
                    )}
                  </ul>
                  <h3>Färg</h3>
                  <ul className="toppings-list">
                    {renderListItems(
                      colorOptions,
                      colorState,
                      handleColorChange
                    )}
                  </ul>
                  <h3>Ursprung</h3>
                  <ul className="toppings-list">
                    {renderListItems(
                      originOptions,
                      originState,
                      handleOriginChange
                    )}
                  </ul>
                </div>
                <div className="lg:col-span-3">
                  <DogList
                    searchTerm={searchTerm}
                    genderState={genderState}
                    colorState={colorState}
                    originState={originState}
                  />
                  <div />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default DogPage;
