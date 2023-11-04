import { Link } from "react-router-dom";
import Info from "./Info";

const Header = () => {
  return (
    <div className="shadow-md px-5">
      <div className="flex items-center justify-between">
        <div className="w-full">
          <h1 className="text-2xl sm:text-4xl font-bold">Hello</h1>
        </div>
        <nav className="w-full">
          <ul className="list-reset flex justify-start gap-6 flex-1 sm:mr-8">
            <li>
              <Link
                to="/teams"
                className="no-underline text-md sm:text-xl hover:text-gray-600">
                Teams
              </Link>
            </li>
            <li>
              <Link
                to="/students"
                className="no-underline text-md sm:text-xl hover:text-gray-600">
                Students
              </Link>
            </li>
          </ul>
        </nav>
        <div className="w-full">
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Header;
