import { useState } from "react";
import { SearchBarProps } from "../../../interfaces/Interfaces";

const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: any) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    onChange(event.target.value);
  };

  return (
    <form>
      <label htmlFor="searchInput" className="sr-only" aria-hidden="true">
        Sök efter en hund
      </label>
      <div className="searchbar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
          id="searchInput"
          placeholder="Sök efter en hund..."
        />
        <div className="search-icon" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
