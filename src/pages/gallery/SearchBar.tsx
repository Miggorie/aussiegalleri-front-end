import { useState } from "react";
import { SearchBarProps } from "../../components/Interfaces";

const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: any) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    onChange(event.target.value);
  };

  return (
    <form>
      <div className="max-w-md mx-auto">
        <div className="relative flex items-center w-full h-12 rounded-lg ">
          <div className="grid place-items-center h-full w-12 text-gray-300">
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

          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            className="block w-full px-4 py-2 text-stone-700 bg-white border rounded-full focus:border-stone-400 focus:ring-stone-300 focus:outline-none focus:ring focus:ring-opacity-40 focus-within:shadow-lg bg-white overflow-hidden"
            placeholder="Sök efter en hund..."
          />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
