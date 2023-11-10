import { FC } from "react";
import { ITeam } from "../../services/api/teams";
import DeleteTeam from "./DeleteTeam";
import { selectUser } from "../../store/slices/AuthSlice";
import { useAppSelector } from "../../hooks/redux";
import { useQuery } from "react-query";
import userJoinTeam from "../../services/api/userJoinTeam";
import StudentRequests from "./StudentRequests";

interface PropsType {
  team: ITeam;
}

const TeamLeaderArea: FC<PropsType> = ({ team }) => {
  const user = useAppSelector(selectUser);

  if (!(user && user.id === team.leaderId)) {
    return "";
  }

  return (
    <div>
      <DeleteTeam teamId={team.id} />
      <StudentRequests />
    </div>
  );
};

export default TeamLeaderArea;
