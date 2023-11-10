import { useState } from "react";
import { useQuery } from "react-query";
import teams from "../services/api/teams";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slices/AuthSlice";
import AddTeam from "../components/Teams/AddTeam";
import TeamCard from "../components/Teams/TeamCard";

const Teams = () => {
  const user = useSelector(selectUser);
  const [page] = useState(0);
  const { data, isLoading } = useQuery(["teams", page], () =>
    teams.getAll(page)
  );

  if (!data || isLoading) return "Loading...";
  return (
    <div>
      {!user?.teamId && <AddTeam />}
      <div className="flex flex-wrap gap-5 px-3 justify-center">
        {data?.data.map((team) => (
          <TeamCard canJoin={!user?.teamId} key={team.id} data={team} />
        ))}
      </div>
    </div>
  );
};

export default Teams;
