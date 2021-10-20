import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  return (
    <nav className="w-full flex gap-9 justify-center p-5 ">
      <Link
        className={`${location.pathname === "/" && "font-semibold"}`}
        to="/"
      >
        Search
      </Link>
      <Link
        className={`${location.pathname === "/addwebpage" && "font-semibold"}`}
        to="/addwebpage"
      >
        Add a Web Page
      </Link>
      <Link
        className={`${location.pathname === "/adddoc" && "font-semibold"}`}
        to="/adddoc"
      >
        Add a Document
      </Link>
    </nav>
  );
}
