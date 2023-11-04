import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import teams from "../services/api/teams";

const SingelTeam = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["singeleTeam", id], () =>
    teams.getOne(id as any)
  );
  if (isLoading) return "Loading...";

  console.log(data?.data);

  return <div>SingelTeam: {data?.data.name}</div>;
};

export default SingelTeam;
