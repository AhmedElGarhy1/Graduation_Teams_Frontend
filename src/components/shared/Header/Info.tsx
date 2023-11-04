import { useSelector } from "react-redux";
import { selectUser } from "../../../store/slices/AuthSlice";
import { defaultProfileIcon } from "../../../data/constants";
import { Link } from "react-router-dom";

const Info = () => {
  const user = useSelector(selectUser);
  return (
    <div className="flex items-center mx-6 gap-3 my-2">
      <Link to={"profiles/" + user?.profileId}>
        <div className="relative group sm:w-[60px] w-12 sm:h-[60px] h-12 rounded-full overflow-hidden">
          <img
            src={user?.image || defaultProfileIcon}
            alt="image"
            className="w-full h-full object-cover bg-black"
          />
        </div>
      </Link>

      <div>
        <h1 className="font-bold sm:text-xl text-sm">{user?.username}</h1>
        <div className="text-center">
          {user?.teamId ? "In Team" : "Not in Team"}
        </div>
      </div>
    </div>
  );
};

export default Info;
