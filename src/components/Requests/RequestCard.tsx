import { FC } from "react";
import { IUserJoinTeam } from "../../services/api/userJoinTeam";
import { defaultTeamIcon } from "../../data/constants";

interface IProps {
  data: IUserJoinTeam;
  onAccept?: Function;
  onReject?: Function;
}

const RequestCard: FC<IProps> = ({ data, onAccept, onReject }) => {
  return (
    <div className="min-w-[200px] max-w-[250px] flex-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center py-1">
        <div>
          <img
            className="mx-2 w-20 h-20 mb-3 rounded-full shadow-lg"
            src={data.teamImage || defaultTeamIcon}
            alt={data.teamName}
          />
        </div>
        <div className="flex flex-col justify-center ">
          <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
            {data.teamName}
          </h5>
          <div className="flex space-x-2">
            {onAccept && (
              <button
                onClick={() => onAccept()}
                className="inline-flex items-center px-3 py-[6px] text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Accept
              </button>
            )}
            {onReject && (
              <button
                onClick={() => onReject()}
                className="inline-flex items-center px-3 py-[6px] text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Reject
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
