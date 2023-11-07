import { FC } from "react";
import { ITeam } from "../../services/api/teams";
import DeleteTeam from "./DeleteTeam";
import { selectUser } from "../../store/slices/AuthSlice";
import { useAppSelector } from "../../hooks/redux";

interface PropsType {
  data: ITeam;
}

const TeamLeaderArea: FC<PropsType> = ({ data }) => {
  const user = useAppSelector(selectUser);

  if (!(user && user.id === data.leaderId)) {
    return "";
  }

  return (
    <div>
      <DeleteTeam teamId={data.id} />
    </div>
  );
};

export default TeamLeaderArea;
