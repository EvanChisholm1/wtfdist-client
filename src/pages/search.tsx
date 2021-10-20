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
          <div className="flex flex-col place-items-center">
            <ul className="flex flex-col p-2 gap-3 place-items-center xs:w-auto xs:max-w-[350px] w-[350px]  md:w-[500px] lg:w-[700px] xl:w-[900px]">
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
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
