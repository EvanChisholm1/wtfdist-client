import { FC } from "react";

type Props = {
  id: string;
  link: string;
  title: string;
  content: string;
};

const SearchItem: FC<Props> = ({ link, title, content }) => {
  return (
    <div className="max-w-4xl">
      <a href={link} className="text-blue-500 underline text-sm ">
        {link}
      </a>
      <h3 className="text-xl">{title}</h3>
      <p className="text-sm text-gray-500">{content.slice(0, 300)}</p>
    </div>
  );
};

export default SearchItem;
