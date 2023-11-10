import { FC } from "react";
import { Link } from "react-router-dom";
import { IStudent } from "../../services/api/students";
import { defaultProfileIcon } from "../../data/constants";
import JoinStudentButton from "./JoinStudentButton";

interface CardPropsType {
  data: IStudent;
  canJoin: boolean;
}

const StudentCard: FC<CardPropsType> = ({ data, canJoin }) => {
  return (
    <div className="min-w-[200px] max-w-[250px] flex-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center py-5">
        <img
          className="w-20 h-20 mb-3 rounded-full shadow-lg"
          src={data.image || defaultProfileIcon}
          alt={data.username}
        />
        <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
          {data.username}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {data.department}
        </span>
        <div className="flex mt-4 space-x-2 md:mt-6">
          {canJoin && <JoinStudentButton teamId={data.id} />}
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

export default StudentCard;
