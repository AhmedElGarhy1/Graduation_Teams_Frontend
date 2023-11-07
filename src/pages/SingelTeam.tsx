import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import teams from "../services/api/teams";
import TeamLeaderArea from "../components/Teams/TeamLeaderArea";

const SingelTeam = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["singeleTeam", id], () =>
    teams.getOne(id as any)
  );
  if (isLoading || !data) return "Loading...";

  return (
    <div>
      SingelTeam: {data?.data.name}
      <TeamLeaderArea data={data.data} />
    </div>
  );
};

export default SingelTeam;
