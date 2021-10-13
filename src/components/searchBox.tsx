import { ChangeEvent, useState, FC } from "react";
import SearchIcon from "../icons/searchIcon";

interface Props {
  onSearch?: (query: string) => void;
}

const SearchBox: FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch && onSearch(e.target.value);
  };

  return (
    <form
      onSubmit={e => e.preventDefault()}
      className="flex place-items-center rounded-full focus-within:ring-2 shadow"
    >
      <input
        type="text"
        name="search"
        id="search"
        value={query}
        onChange={onChange}
        className="h-16 outline-none rounded-l-full md:w-[500px] lg:w-[700px] xl:w-[900px] border-none focus:ring-0 px-6 placeholder-opacity-60
         placeholder-gray-500 text-lg"
        placeholder="Search Your Stuff"
        autoFocus
      />
      <button
        type="submit"
        className="grid place-items-center bg-indigo-500 w-16 h-16 text-white font-bold rounded-r-full relative"
      >
        <SearchIcon className="w-8 h-8 relative -left-1" />
      </button>
    </form>
  );
};

export default SearchBox;
