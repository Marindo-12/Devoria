import { Link, useLocation } from "react-router-dom";
import "./HSinSup.css";

export default function Header() {
  const location = useLocation();

  return (
    <header className="flex justify-between items-center">
      <div className="w-12 h-12 flex items-center justify-center">

      </div>

      <nav className="flex items-center justify-center">
        <svg
          viewBox="0 0 2 3"
          aria-hidden="true"
          className="w-8 h-12 fill-gray-200  dark:fill-white/10"
        >
          <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
        </svg>


        <ul className="relative h-12 flex items-center bg-gray-200 dark:bg-white/10 backdrop-blur-md">

          <li
            aria-current={location.pathname === "/" ? "page" : undefined}
            className="h-full relative"
          >
            <Link
              to="/"
              className="flex h-full items-center px-3 uppercase tracking-widest text-xs font-bold text-gray-500 dark:text-gray-200 hover:text-purple-500 transition"
            >
              Home
            </Link>
          </li>
        </ul>

        <svg viewBox="0 0 2 3" aria-hidden="true" className="w-8 h-12 fill-gray-200  dark:fill-white/10">
          <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
        </svg>
      </nav>

      <div className="w-12 h-12 flex items-center justify-center">

      </div>
    </header>
  );
}
