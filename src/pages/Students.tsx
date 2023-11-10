import { useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slices/AuthSlice";
import students from "../services/api/students";
import StudentCard from "../components/Students/StudentCard";

const Students = () => {
  const user = useSelector(selectUser);
  const [page] = useState(0);
  const { data, isLoading } = useQuery(["students", page], () =>
    students.getAllFree()
  );
  if (!data || isLoading) return "Loading...";
  return (
    <div>
      <div className="flex flex-wrap gap-5 px-3 justify-center">
        {data.data.length <= 0
          ? "There are no Students"
          : data.data
              .filter((team) => team.id !== user?.id)
              .map((team) => (
                <StudentCard
                  canJoin={!!(user && user.roles.some((r) => r === "LEADER"))}
                  key={team.id}
                  data={team}
                />
              ))}
      </div>
    </div>
  );
};

export default Students;
