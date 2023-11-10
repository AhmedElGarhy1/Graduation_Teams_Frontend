import { Link } from "react-router-dom";
import Info from "./Info";
import { selectUser } from "../../../store/slices/AuthSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector(selectUser);

  return (
    <div className="shadow-md px-5">
      <div className="flex items-center justify-between">
        <div className="w-5/12">
          <h1 className="text-2xl sm:text-4xl font-bold">Hello</h1>
        </div>
        <nav className="w-full">
          <ul className="list-reset flex justify-start gap-2 sm:gap-6 flex-1 sm:mr-8">
            {user?.teamId && (
              <li>
                <Link
                  to={`/teams/${user?.teamId}`}
                  className="no-underline text-[16px] sm:text-lg hover:text-gray-600">
                  My Team
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/teams"
                className="no-underline text-[16px] sm:text-lg hover:text-gray-600">
                Teams
              </Link>
            </li>
            <li>
              <Link
                to="/students"
                className="no-underline text-[16px] sm:text-lg hover:text-gray-600">
                Students
              </Link>
            </li>
            <li>
              <Link
                to="/requests"
                className="no-underline text-[16px] sm:text-lg hover:text-gray-600">
                Requests
              </Link>
            </li>
          </ul>
        </nav>
        <div className="w-1/2">
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Header;
