import React, { FC } from "react";
import useCustomMutation from "../../hooks/useCustomMutation";
import userJoinTeam, { IUserJoinTeam } from "../../services/api/userJoinTeam";
import RequestCard from "../Requests/RequestCard";
import { useQuery } from "react-query";

const StudentRequests: FC = () => {
  const { data } = useQuery("team-requests", () =>
    userJoinTeam.getAllForLeaders()
  );

  const { mutate: reject } = useCustomMutation(
    ["team-requests"],
    (id: number) => userJoinTeam.cancel(id)
  );
  const { mutate: accept } = useCustomMutation(
    ["team-requests"],
    (id: number) => userJoinTeam.acceptStuent(id)
  );

  if (!data) return "Loading...";
  return (
    <div>
      <div>Student requests</div>
      <div>
        <h2>Incoming requests</h2>
        <div className="flex flex-wrap gap-5 px-3 justify-center">
          {data.data
            .filter((ele) => ele.type === "TEAM")
            .map((record) => (
              <RequestCard
                key={record.id}
                onReject={() => {
                  reject(record.id);
                }}
                onAccept={() => {
                  accept(record.id);
                }}
                data={record}
              />
            ))}
        </div>
        <h2>Sent requests</h2>
        <div className="flex flex-wrap gap-5 px-3 justify-center">
          {data.data
            .filter((ele) => ele.type === "STUDENT")
            .map((record) => (
              <RequestCard
                key={record.id}
                onReject={() => {
                  reject(record.id);
                }}
                data={record}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default StudentRequests;
