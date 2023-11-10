import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import profiles from "../services/api/profiles";

const Profile = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["singelProfile", id], () =>
    profiles.getOne(id as any)
  );
  if (isLoading) return "Loading...";
  return <div>Profile phone: {data?.data.phone}</div>;
};

export default Profile;
