import { FC } from "react";
import useCustomMutation from "../../hooks/useCustomMutation";
import teams from "../../services/api/teams";
import { warningAlert } from "../../utils/sweetAlert/warningAlert";

type PropsType = {
  teamId: number;
};

const DeleteTeam: FC<PropsType> = ({ teamId }) => {
  const { mutate, isLoading } = useCustomMutation(["teams"], () =>
    teams.deleteOne(teamId)
  );

  async function handleDelete() {
    const isOkay = await warningAlert(
      "Are you sure",
      "You will Delete this team!!"
    );
    if (!isOkay) return;

    mutate("");
  }

  return (
    <div className="w-fit ml-auto my-3">
      <button
        onClick={handleDelete}
        className="inline-flex items-center px-3 py-[6px] text-xl mx-4 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
        Delete Team
      </button>
    </div>
  );
};

export default DeleteTeam;
