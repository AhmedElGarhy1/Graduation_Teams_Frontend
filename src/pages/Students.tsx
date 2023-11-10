import { useState, FC } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slices/AuthSlice";
import AddTeam from "../components/Teams/AddTeam";
import students from "../services/api/students";
import StudentCard from "../components/Students/StudentCard";

const Students = () => {
  const user = useSelector(selectUser);
  const [page, setPage] = useState(0);
  const { data, isLoading } = useQuery(["students", page], () =>
    students.getAllFree()
  );

  if (!data) return "Loading...";
  return (
    <div>
      {!user?.teamId && <AddTeam />}
      <div className="flex flex-wrap gap-5 px-3 justify-center">
        {data?.data
          .filter((team) => team.id !== user?.id)
          .map((team) => (
            <StudentCard canJoin={!user?.teamId} key={team.id} data={team} />
          ))}
      </div>
    </div>
  );
};

export default Students;
