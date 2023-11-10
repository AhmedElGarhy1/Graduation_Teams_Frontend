import { FC } from "react";
import useCustomMutation from "../../hooks/useCustomMutation";
import userJoinTeam from "../../services/api/userJoinTeam";

interface IProps {
  teamId: number;
}

const JoinTeamButton: FC<IProps> = ({ teamId }) => {
  const { mutate } = useCustomMutation(["sentTeamRequest"], () =>
    userJoinTeam.create({
      targetId: teamId,
      type: "TEAM",
    })
  );

  const handleClick = () => {
    mutate("");
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center px-3 py-[6px] text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Join
    </button>
  );
};

export default JoinTeamButton;
