import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, FC } from "react";
import { TLogin, TSignup, loginSchema } from "../../utils/validation/auth";
import auth, { IAuth } from "../../services/api/auth";
import useCustomMutation from "../../hooks/useCustomMutation";
import { useAppDispatch } from "../../hooks/redux";
import { setUser } from "../../store/slices/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import { getTokenValue } from "../../utils";

const Login: FC = () => {
  const dispatch = useAppDispatch();
  const navigator = useNavigate();
  const { isLoading, mutate } = useCustomMutation(
    ["signup"],
    auth.signin,
    onSuccess
  );

  useEffect(() => {
    if (getTokenValue()) navigator("/home");
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
    mode: "all",
  });

  const submitRequest = (data: TSignup) => {
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
          login to your account
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
          Or
          <br />
          <Link
            to="/auth/register"
            className="cursor-pointer font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
            Create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            onSubmit={handleSubmit((d) => submitRequest(d as any))}
            noValidate>
            <div className="mt-6">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  {...register("email")}
                  type="text"
                  placeholder="email@email.com"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
              <span className="text-red-500 text-sm">
                {errors.email?.message}
              </span>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  {...register("password")}
                  type="text"
                  placeholder="***********"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
              <span className="text-red-500 text-sm">
                {errors.email?.message}
              </span>
            </div>

            <a
              href="#"
              className="ml-auto mt-3 text-sm text-blue-700 hover:underline dark:text-blue-500">
              Forget your Password?
            </a>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  disabled={isLoading}
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                  Login
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
