import { useQuery } from "react-query";
import userJoinTeam from "../services/api/userJoinTeam";
import RequestCard from "../components/Requests/RequestCard";
import useCustomMutation from "../hooks/useCustomMutation";

const Requests = () => {
  const { data, isLoading } = useQuery("incoming", () =>
    userJoinTeam.getAllForStudents()
  );

  const { mutate: reject } = useCustomMutation(["incoming"], (id: number) =>
    userJoinTeam.cancel(id)
  );

  const { mutate: accept } = useCustomMutation(["incoming"], (id: number) =>
    userJoinTeam.acceptTeam(id)
  );

  if (!data || isLoading) return "Loading...";

  return (
    <div>
      <h2>Incoming requests</h2>
      <div className="flex flex-wrap gap-5 px-3 justify-center">
        {data.data
          .filter((ele) => ele.type === "STUDENT")
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
          .filter((ele) => ele.type === "TEAM")
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
  );
};

export default Requests;
