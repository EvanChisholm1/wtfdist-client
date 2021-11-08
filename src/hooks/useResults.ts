import { useQuery } from "react-query";

const useResults = (queryString: string) => {
  const query = useQuery(["results", queryString], async () => {
    const searchParams = new URLSearchParams();
    console.log("use results:", queryString);
    searchParams.append("q", queryString);
    const response = await fetch(
      `http://localhost:4000/search?${searchParams.toString()}`
    );
    if (!response.ok) {
      throw new Error("network response was not okay");
    }
    return await response.json();
  });

  return query;
};

export default useResults;
