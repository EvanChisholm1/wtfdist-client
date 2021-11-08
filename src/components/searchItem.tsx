import { FC } from "react";
import highlight from "../helpers/highlight";
import removeStopWords from "../helpers/removeStopWords";

type Props = {
  id: string;
  link: string;
  title: string;
  content: string;
  queryString: string;
};

const SearchItem: FC<Props> = ({ link, title, content, queryString }) => {
  const highlightedContent = highlight(
    removeStopWords(queryString.toLowerCase().trim()),
    content.toLowerCase()
  );

  return (
    <div className="max-w-4xl ">
      <a href={link} className="text-blue-500 underline text-sm ">
        {link}
      </a>
      <h3 className="text-xl">{title}</h3>
      <p
        className="text-sm text-gray-500"
        dangerouslySetInnerHTML={{
          __html: `${highlightedContent.split(" ").slice(0, 50).join(" ")}...`,
        }}
      ></p>
    </div>
  );
};

export default SearchItem;
