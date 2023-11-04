import { useState, FC } from "react";
import TeamModal from "./TeamModal";

interface Props {
  teamId: number;
}

const TeamDetailsButton: FC<Props> = ({ teamId }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center px-3 py-[6px] text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
        Details
      </button>
      <TeamModal
        teamId={teamId}
        closeModal={() => setIsOpen(false)}
        isOpen={isOpen}
      />
    </>
  );
};

export default TeamDetailsButton;
