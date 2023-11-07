import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useEffect } from "react";
import { TSignup, singupSchema } from "../../utils/validation/auth";
import useCustomMutation from "../../hooks/useCustomMutation";
import auth, { IAuth } from "../../services/api/auth";
import { setUser } from "../../store/slices/AuthSlice";
import { useAppDispatch } from "../../hooks/redux";
import { Link, useNavigate } from "react-router-dom";
import { getTokenValue } from "../../utils";

const Register: FC = () => {
  const dispatch = useAppDispatch();
  const navigator = useNavigate();

  const { isLoading, mutate } = useCustomMutation(
    ["signup"],
    auth.signup,
    onSuccess
  );

  useEffect(() => {
    if (getTokenValue()) navigator("/home");
  }, []);

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<TSignup>({
    resolver: zodResolver(singupSchema),
    mode: "all",
  });

  const submitRequest = (data: TSignup) => {
    // validate pasword
    if (data.password !== data.confirmPassowrd)
      return setError("confirmPassowrd", {
        message: "Field doesn't match the password",
      });

    mutate(data);
  };

  function onSuccess(data: IAuth) {
    dispatch(setUser(data));
    navigator("/home");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Create a new account
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
          Or
          <br />
          <Link
            to="/auth/login"
            className="cursor-pointer font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
            login to your account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit((d) => submitRequest(d))} noValidate>
            <div>
              <label className="block text-sm font-medium leading-5  text-gray-700">
                First Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  {...register("firstName")}
                  placeholder="Ahmed"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
              <span className="text-red-500 text-sm">
                {errors.firstName?.message}
              </span>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Last Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  {...register("lastName")}
                  type="text"
                  placeholder="ElGarhy"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                <span className="text-red-500 text-sm">
                  {errors?.lastName?.message || ""}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Username
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  {...register("username")}
                  type="text"
                  placeholder="AhmedElGarhy1"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                <span className="text-red-500 text-sm">
                  {errors.username?.message}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  {...register("email")}
                  placeholder="ahmed@email.com"
                  type="text"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
              <span className="text-red-500 text-sm">
                {errors.email?.message}
              </span>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Phone
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  {...register("phone")}
                  type="text"
                  placeholder="01234567890"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
              <span className="text-red-500 text-sm">
                {errors.phone?.message}
              </span>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  {...register("password")}
                  type="password"
                  placeholder="***********"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
              <span className="text-red-500 text-sm">
                {errors.password?.message}
              </span>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  {...register("confirmPassowrd")}
                  type="password"
                  placeholder="***********"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
              <span className="text-red-500 text-sm">
                {errors.confirmPassowrd?.message}
              </span>
            </div>

            <div className="flex justify-around  my-5">
              <div className="flex items-center">
                <input
                  {...register("gender")}
                  id="Male"
                  type="radio"
                  value="Male"
                  className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                />
                <label
                  htmlFor="Male"
                  className="text-sm font-medium text-gray-900 ml-2 block">
                  Male
                </label>
              </div>

              <div className="flex items-center">
                <input
                  {...register("gender")}
                  id="Female"
                  type="radio"
                  value="Female"
                  className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                />
                <label
                  htmlFor="Female"
                  className="text-sm font-medium text-gray-900 ml-2 block">
                  Female
                </label>
              </div>
            </div>
            <span className="text-red-500 text-sm">
              {errors.gender?.message}
            </span>

            <div>
              <label
                htmlFor="level"
                className="block mb-2 text-sm font-medium text-gray-900 bg-white">
                Select Your Level
              </label>
              <select
                {...register("level", {
                  valueAsNumber: true,
                })}
                id="level"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option disabled selected>
                  Select you Level
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <span className="text-red-500 text-sm">
                {errors.gender?.message}
              </span>
            </div>

            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 bg-white">
                Select Your Department
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
              <span className="text-red-500 text-sm">
                {errors.gender?.message}
              </span>
            </div>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                  {isLoading ? "Loading" : "Create account"}
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
