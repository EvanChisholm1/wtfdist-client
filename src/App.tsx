import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import LoadingSpinner from "./components/loadingSpinner";
import SearchBox from "./components/searchBox";
import useResults from "./hooks/useResults";

function App() {
  const [queryString, setQueryString] = useState("");
  const resultsQuery = useResults(queryString);

  useEffect(() => {
    console.log(resultsQuery);
  }, [resultsQuery]);

  return (
    <div className="App grid justify-center">
      <div className="mt-10 flex flex-col gap-4">
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
          <ul>
            {resultsQuery.data.map((document: any) => (
              <li key={document.id}>
                <a
                  className="text-blue-500 underline text-sm"
                  href={document.link}
                >
                  {document.link}
                </a>
                <h3 className="text-xl">{document.title}</h3>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
