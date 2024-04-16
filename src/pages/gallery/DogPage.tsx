import { useState } from "react";
import SearchBar from "./components/SearchBar";
import DogList from "./DogList";
import {
  genderOptions,
  colorOptions,
  originOptions,
  ageOptions,
} from "./components/FilterOptions";
import { Checkbox } from "./components/Checkbox";
import { useMediaQuery } from "react-responsive";

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
  const isMediumScreenOrLess = useMediaQuery({ maxWidth: 1024 });

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
          <main className="dog-page-container">
            <div className="dogpage-header">
              <h1 className="page-title">Galleri</h1>
              <div className="search-filter-container">
                <div className="searchbar-container">
                  <SearchBar
                    onChange={(filterTerm) => setSearchTerm(filterTerm)}
                  />
                </div>

                <button
                  className="mobile-filter"
                  aria-expanded={ipadFilterIsOpen}
                  onClick={() => setIpadFilterIsOpen(!ipadFilterIsOpen)}
                >
                  Filtrera
                </button>
              </div>
            </div>

            {/* Datorfiltrering */}
            <section className="doglist-container">
              <div
                className={
                  ipadFilterIsOpen
                    ? "filter-container"
                    : "filter-container-hidden"
                }
              >
                <aside
                  aria-label="Filtrera på hundar"
                  className="filter-sidebar"
                >
                  <h2 className="h2">Filtrera</h2>
                  <form className="fieldset-container">
                    <div className="fieldset">
                      {isMediumScreenOrLess ? (
                        <fieldset>
                          <legend>
                            <div className="button-container">
                              <button
                                type="button"
                                aria-expanded={genderIsOpen}
                                aria-controls="ul-gender"
                                onClick={() => setGenderIsOpen(!genderIsOpen)}
                              >
                                <div className="button-content">
                                  <h3>Kön</h3>
                                  <span
                                    className={
                                      genderIsOpen ? "button-up" : "button-down"
                                    }
                                  ></span>
                                </div>
                              </button>
                            </div>
                          </legend>
                          <ul
                            id="ul-gender"
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
                        </fieldset>
                      ) : (
                        // Visa checkboxar för stor skärm
                        <div className="big-screens">
                          <h3>Kön</h3>
                          <ul className="checkbox-list">
                            {renderListItems(
                              genderOptions,
                              genderState,
                              handleGenderChange
                            )}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="fieldset">
                      {isMediumScreenOrLess ? (
                        <fieldset>
                          <legend>
                            <div className="button-container">
                              <button
                                type="button"
                                aria-expanded={ageIsOpen}
                                aria-controls="ul-age"
                                onClick={() => setAgeIsOpen(!ageIsOpen)}
                              >
                                <div className="button-content">
                                  <h3>Ålder</h3>
                                  <span
                                    className={
                                      ageIsOpen ? "button-up" : "button-down"
                                    }
                                  ></span>
                                </div>
                              </button>
                            </div>
                          </legend>
                          <ul
                            id="ul-age"
                            className={
                              ageIsOpen
                                ? "checkbox-list"
                                : "checkbox-list-hidden"
                            }
                          >
                            {renderListItems(
                              ageOptions,
                              ageState,
                              handleAgeChange
                            )}
                          </ul>
                        </fieldset>
                      ) : (
                        // Visa checkboxar för stor skärm
                        <div className="big-screens">
                          <h3>Ålder</h3>
                          <ul className="checkbox-list">
                            {renderListItems(
                              ageOptions,
                              ageState,
                              handleAgeChange
                            )}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="fieldset">
                      <fieldset>
                        <legend>
                          <div className="button-container">
                            <button
                              type="button"
                              aria-expanded={colorIsOpen}
                              aria-controls="ul-color"
                              onClick={() => setColorIsOpen(!colorIsOpen)}
                            >
                              <div className="button-content">
                                <h3>Färg</h3>
                                <span
                                  className={
                                    colorIsOpen ? "button-up" : "button-down"
                                  }
                                ></span>
                              </div>
                            </button>
                          </div>
                        </legend>
                        <ul
                          id="ul-color"
                          className={
                            colorIsOpen
                              ? "checkbox-list"
                              : "checkbox-list-hidden"
                          }
                        >
                          {renderListItems(
                            colorOptions,
                            colorState,
                            handleColorChange
                          )}
                        </ul>
                      </fieldset>
                    </div>

                    <div className="fieldset">
                      <fieldset>
                        <div className="button-container">
                          <legend>
                            <button
                              type="button"
                              aria-expanded={originIsOpen}
                              aria-controls="ul-ursprung"
                              onClick={() => setOriginIsOpen(!originIsOpen)}
                            >
                              <div className="button-content">
                                <h3>Ursprung</h3>
                                <span
                                  className={
                                    originIsOpen ? "button-up" : "button-down"
                                  }
                                ></span>
                              </div>
                            </button>
                          </legend>
                          <ul
                            id="ul-ursprung"
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
                    </div>
                  </form>
                  <button
                    type="button"
                    className="clear-filter m-top m-btm"
                    onClick={clearAllFilters}
                  >
                    Rensa filter
                  </button>
                </aside>
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
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default DogPage;
