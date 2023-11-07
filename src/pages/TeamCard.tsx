import { FC } from "react";
import { Link } from "react-router-dom";
import { ITeam } from "../services/api/teams";
import { defaultTeamIcon } from "../data/constants";

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
          src={data.image || defaultTeamIcon}
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

export default TeamCard;
