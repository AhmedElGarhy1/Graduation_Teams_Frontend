import { useState, FC } from "react";
import { useQuery } from "react-query";
import teams, { ITeam } from "../services/api/teams";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slices/AuthSlice";
import TeamDetailsButton from "../components/Teams/TeamDetailsButton";
import { Link } from "react-router-dom";

const Teams = () => {
  const user = useSelector(selectUser);
  const [page, setPage] = useState(0);
  const { data, isLoading } = useQuery(["teams", page], () =>
    teams.getAll(page)
  );

  if (!data) return "Loading...";
  return (
    <div>
      <div className="w-fit ml-auto my-3">
        {!user?.teamId && (
          <button className="inline-flex items-center px-3 py-[6px] text-xl mx-4 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
            Create Team
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-5 px-3 justify-center">
        {data?.data.map((team) => (
          <TeamCard canJoin={!user?.teamId} key={team.id} data={team} />
        ))}
      </div>
    </div>
  );
};

export default Teams;

interface CardPropsType {
  data: ITeam;
  canJoin: boolean;
}

const TeamCard: FC<CardPropsType> = ({ data, canJoin }) => {
  return (
    <div className="min-w-[200px] max-w-[250px] flex-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center py-5">
        <img
          className="w-20 h-20 mb-3 rounded-full shadow-lg"
          src={data.image}
          alt={data.name}
        />
        <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
          {data.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {data.leaderName}
        </span>
        <div className="flex mt-4 space-x-2 md:mt-6">
          {canJoin && (
            <button className="inline-flex items-center px-3 py-[6px] text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Join
            </button>
          )}
          <Link
            to={"" + data.id}
            className="inline-flex items-center px-3 py-[6px] text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};
