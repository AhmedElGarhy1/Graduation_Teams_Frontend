import { FC, ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser, setUser } from "../store/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import auth from "../services/api/auth";
import { getTokenValue, removeTokenValue } from "../utils";

interface PropsType {
  children: ReactNode;
}

const ProtectedRoute: FC<PropsType> = ({ children }) => {
  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();

  const navigator = useNavigate();

  useEffect(() => {
    console.log(user);
    console.log(getTokenValue());
    if (!user) {
      if (!getTokenValue()) {
        navigator("/auth/login");
        return;
      }
      auth
        .getCurrentUser()
        .then((data) => {
          dispatch(setUser(data.data));
        })
        .catch((err) => {
          console.log(err);
          navigator("/auth/login");
          removeTokenValue();
        });
    }
  }, []);

  if (!user) return "Loading...";

  return <div>{children}</div>;
};

export default ProtectedRoute;
