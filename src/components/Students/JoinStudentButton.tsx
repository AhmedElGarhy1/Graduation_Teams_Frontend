import { FC } from "react";
import useCustomMutation from "../../hooks/useCustomMutation";
import userJoinTeam from "../../services/api/userJoinTeam";

interface IProps {
  teamId: number;
}

const JoinStudentButton: FC<IProps> = ({ teamId }) => {
  const { mutate, isLoading } = useCustomMutation(["sendStudentRequest"], () =>
    userJoinTeam.create({
      targetId: teamId,
      type: "STUDENT",
    })
  );

  const handleClick = () => {
    mutate("");
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="inline-flex items-center px-3 py-[6px] text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      {isLoading ? "Loading..." : "Invite"}
    </button>
  );
};

export default JoinStudentButton;
