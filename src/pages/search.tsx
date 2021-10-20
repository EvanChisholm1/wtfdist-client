import { useState } from "react";
import LoadingSpinner from "../components/loadingSpinner";
import SearchBox from "../components/searchBox";
import useResults from "../hooks/useResults";
import SearchItem from "../components/searchItem";

function SearchPage() {
  const [queryString, setQueryString] = useState("");
  const resultsQuery = useResults(queryString);

  return (
    <div className="grid justify-center">
      <div className="mt-2 flex flex-col gap-4">
        <SearchBox onSearch={setQueryString} />

        {resultsQuery.isLoading ? (
          <div className="grid place-items-center">
            <LoadingSpinner />
          </div>
        ) : resultsQuery.isError ? (
          <div>
            <h1 className="text-5xl">uh oh an error occured</h1>
          </div>
        ) : (
          <ul className="flex flex-col gap-3 place-items-center">
            {resultsQuery.data.map((document: any) => (
              <li key={document.id}>
                <SearchItem
                  id={document.id}
                  link={document.link}
                  title={document.title}
                  content={document.content}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
