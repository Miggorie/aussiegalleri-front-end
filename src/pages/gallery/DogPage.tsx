import { useState } from "react";
import SearchBar from "./SearchBar";
import DogList from "./DogList";
import {
  genderOptions,
  colorOptions,
  originOptions,
  ageOptions,
} from "./filtercomponents/FilterOptions";
import { Checkbox } from "./filtercomponents/checkbox/Checkbox";
import "./filtercomponents/scss/filter-style.css";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [genderIsOpen, setGenderIsOpen] = useState(false);
  const [ageIsOpen, setAgeIsOpen] = useState(false);
  const [colorIsOpen, setColorIsOpen] = useState(false);
  const [originIsOpen, setOriginIsOpen] = useState(false);
  const [ipadFilterIsOpen, setIpadFilterIsOpen] = useState(false);

  const [ageState, setAgeState] = useState(
    new Array(genderOptions.length).fill(false)
  );

  const [genderState, setGenderState] = useState(
    new Array(genderOptions.length).fill(false)
  );
  const [colorState, setColorState] = useState(
    new Array(colorOptions.length).fill(false)
  );
  const [originState, setOriginState] = useState(
    new Array(originOptions.length).fill(false)
  );

  const handleAgeChange = (position: number) => {
    const updatedAgeState = ageState.map((item, index) =>
      index === position ? !item : item
    );
    setAgeState(updatedAgeState);
  };

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

  const clearAllFilters = () => {
    setGenderState(new Array(genderOptions.length).fill(false));
    setAgeState(new Array(ageOptions.length).fill(false));
    setColorState(new Array(colorOptions.length).fill(false));
    setOriginState(new Array(originOptions.length).fill(false));
  };

  return (
    <div>
      <div className="bg-white">
        <div>
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline border-b border-stone-200 pt-14 pb-8">
              <h1 className="text-2xl font-semibold">Aussiegalleriet</h1>
              <div className="w-5/6">
                <SearchBar
                  onChange={(filterTerm) => setSearchTerm(filterTerm)}
                />
              </div>
              <div>
                <button
                  className="mobile-filter"
                  aria-expanded={ipadFilterIsOpen}
                  onClick={() => setIpadFilterIsOpen(!ipadFilterIsOpen)}
                >
                  Filtrera
                </button>
              </div>
            </div>
            <section
              className={
                ipadFilterIsOpen
                  ? "filter-ipad-container"
                  : "filter-ipad-container-hidden"
              }
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <div className="filter-ipad-container">
                  <h2 className="h2">Filtrera</h2>
                  <div className="m-btm m-top">
                    <a href="http://localhost:8888/dogs">Alla hundar</a>
                  </div>
                  <fieldset>
                    <div className="filter-all-container">
                      <legend className="button-container">
                        <button
                          className="accordion-button"
                          aria-expanded={genderIsOpen}
                          onClick={() => setGenderIsOpen(!genderIsOpen)}
                        >
                          <h3 className="filter-list-heading">Kön</h3>
                          <span
                            className={
                              genderIsOpen ? "button-up" : "button-down"
                            }
                          ></span>
                        </button>
                      </legend>
                      <ul
                        className={
                          genderIsOpen
                            ? "checkbox-list"
                            : "checkbox-list-hidden"
                        }
                      >
                        {renderListItems(
                          genderOptions,
                          genderState,
                          handleGenderChange
                        )}
                      </ul>
                    </div>
                  </fieldset>
                  <fieldset>
                    <div className="filter-all-container">
                      <legend>
                        <button
                          className="accordion-button"
                          aria-expanded={ageIsOpen}
                          onClick={() => setAgeIsOpen(!ageIsOpen)}
                        >
                          <h3 className="filter-list-heading">Ålder</h3>
                          <span
                            className={ageIsOpen ? "button-up" : "button-down"}
                          ></span>
                        </button>
                      </legend>
                      <ul
                        className={
                          ageIsOpen ? "checkbox-list" : "checkbox-list-hidden"
                        }
                      >
                        {renderListItems(ageOptions, ageState, handleAgeChange)}
                      </ul>
                    </div>
                  </fieldset>

                  <fieldset>
                    <div className="filter-all-container">
                      <legend>
                        <button
                          className="accordion-button"
                          aria-expanded={colorIsOpen}
                          onClick={() => setColorIsOpen(!colorIsOpen)}
                        >
                          <h3 className="filter-list-heading">Färg</h3>
                          <span
                            className={
                              colorIsOpen ? "button-up" : "button-down"
                            }
                          ></span>
                        </button>
                      </legend>
                      <ul
                        className={
                          colorIsOpen ? "checkbox-list" : "checkbox-list-hidden"
                        }
                      >
                        {renderListItems(
                          colorOptions,
                          colorState,
                          handleColorChange
                        )}
                      </ul>
                    </div>
                  </fieldset>

                  <fieldset>
                    <div className="filter-all-container">
                      <legend>
                        <button
                          className="accordion-button"
                          aria-expanded={originIsOpen}
                          onClick={() => setOriginIsOpen(!originIsOpen)}
                        >
                          <h3 className="filter-list-heading">Ursprung</h3>
                          <span
                            className={
                              originIsOpen ? "button-up" : "button-down"
                            }
                          ></span>
                        </button>
                      </legend>
                      <ul
                        className={
                          originIsOpen
                            ? "checkbox-list"
                            : "checkbox-list-hidden"
                        }
                      >
                        {renderListItems(
                          originOptions,
                          originState,
                          handleOriginChange
                        )}
                      </ul>
                    </div>
                  </fieldset>
                  <div>
                    <button
                      className="clear-filter m-top m-btm"
                      onClick={clearAllFilters}
                    >
                      Rensa filter
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <div />
                </div>
              </div>
            </section>
            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <div className="filter-sidebar-container">
                  <h2 className="h2">Filtrera</h2>
                  <div className="m-btm m-top">
                    <a href="http://localhost:8888/dogs">Alla hundar</a>
                  </div>
                  <fieldset>
                    <div className="filter-all-container">
                      <legend className="button-container">
                        <button
                          className="accordion-button"
                          aria-expanded={genderIsOpen}
                          onClick={() => setGenderIsOpen(!genderIsOpen)}
                        >
                          <h3 className="filter-list-heading">Kön</h3>
                          <span
                            className={
                              genderIsOpen ? "button-up" : "button-down"
                            }
                          ></span>
                        </button>
                      </legend>
                      <ul
                        className={
                          genderIsOpen
                            ? "checkbox-list"
                            : "checkbox-list-hidden"
                        }
                      >
                        {renderListItems(
                          genderOptions,
                          genderState,
                          handleGenderChange
                        )}
                      </ul>
                    </div>
                  </fieldset>
                  <fieldset>
                    <div className="filter-all-container">
                      <legend>
                        <button
                          className="accordion-button"
                          aria-expanded={ageIsOpen}
                          onClick={() => setAgeIsOpen(!ageIsOpen)}
                        >
                          <h3 className="filter-list-heading">Ålder</h3>
                          <span
                            className={ageIsOpen ? "button-up" : "button-down"}
                          ></span>
                        </button>
                      </legend>
                      <ul
                        className={
                          ageIsOpen ? "checkbox-list" : "checkbox-list-hidden"
                        }
                      >
                        {renderListItems(ageOptions, ageState, handleAgeChange)}
                      </ul>
                    </div>
                  </fieldset>

                  <fieldset>
                    <div className="filter-all-container">
                      <legend>
                        <button
                          className="accordion-button"
                          aria-expanded={colorIsOpen}
                          onClick={() => setColorIsOpen(!colorIsOpen)}
                        >
                          <h3 className="filter-list-heading">Färg</h3>
                          <span
                            className={
                              colorIsOpen ? "button-up" : "button-down"
                            }
                          ></span>
                        </button>
                      </legend>
                      <ul
                        className={
                          colorIsOpen ? "checkbox-list" : "checkbox-list-hidden"
                        }
                      >
                        {renderListItems(
                          colorOptions,
                          colorState,
                          handleColorChange
                        )}
                      </ul>
                    </div>
                  </fieldset>

                  <fieldset>
                    <div className="filter-all-container">
                      <legend>
                        <button
                          className="accordion-button"
                          aria-expanded={originIsOpen}
                          onClick={() => setOriginIsOpen(!originIsOpen)}
                        >
                          <h3 className="filter-list-heading">Ursprung</h3>
                          <span
                            className={
                              originIsOpen ? "button-up" : "button-down"
                            }
                          ></span>
                        </button>
                      </legend>
                      <ul
                        className={
                          originIsOpen
                            ? "checkbox-list"
                            : "checkbox-list-hidden"
                        }
                      >
                        {renderListItems(
                          originOptions,
                          originState,
                          handleOriginChange
                        )}
                      </ul>
                    </div>
                  </fieldset>
                  <div>
                    <button
                      className="clear-filter m-top m-btm"
                      onClick={clearAllFilters}
                    >
                      Rensa filter
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <DogList
                    searchTerm={searchTerm}
                    genderState={genderState}
                    colorState={colorState}
                    originState={originState}
                    ageState={ageState}
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
