import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { TTeam, teamSchema } from "../../utils/validation/team";

interface ParamsType {
  sendRequest: (data: TTeam) => void;
  isLoading: boolean;
  defaultValues?: TTeam;
}

const TeamForm: FC<ParamsType> = ({ isLoading, sendRequest }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<TTeam>({
    resolver: zodResolver(teamSchema),
    mode: "all",
  });
  console.log(errors);

  const submitRequest = async (data: TTeam) => {
    sendRequest(data);
  };

  return (
    <div className="mx-[70px] ">
      <form onSubmit={handleSubmit((d) => submitRequest(d))} noValidate>
        <div className="mt-6">
          <label className="block text-sm font-medium leading-5 text-gray-700">
            Team Name
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              {...register("name")}
              type="text"
              placeholder="***********"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
          <span className="text-red-500 text-sm">{errors.name?.message}</span>
        </div>
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 bg-white">
            Select an option
          </label>
          <select
            {...register("department")}
            id="countries"
            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option disabled selected>
              Select you Department
            </option>
            <option value="IT">IT</option>
            <option value="CS">CS</option>
            <option value="IS">IS</option>
            <option value="DS">DS</option>
          </select>
          <span className="text-red-500 text-sm">{errors.gender?.message}</span>
        </div>
        <button className="inline-flex items-center px-3 py-[6px] text-xl mx-4 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
          Create
        </button>
      </form>
    </div>
  );
};

export default TeamForm;
