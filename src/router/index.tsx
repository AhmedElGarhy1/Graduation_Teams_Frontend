import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import Students from "../pages/Students";
import Teams from "../pages/Teams";
import Profile from "../pages/Profile";
import SingelTeam from "../pages/SingelTeam";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<>404 Not found</>}>
      <Route path="auth">
        <Route element={<Register />} path="register" />
        <Route element={<Login />} path="login" />
      </Route>
      <Route element={<DashboardLayout />}>
        <Route
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
          path="home"
        />
        <Route
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
          path="profiles/:id"
        />
        <Route path="teams">
          <Route
            index
            element={
              <ProtectedRoute>
                <Teams />
              </ProtectedRoute>
            }
          />
          <Route
            element={
              <ProtectedRoute>
                <SingelTeam />
              </ProtectedRoute>
            }
            path=":id"
          />
        </Route>

        <Route
          element={
            <ProtectedRoute>
              <Students />
            </ProtectedRoute>
          }
          path="students"
        />

        <Route
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
          path="home"
        />
      </Route>
    </Route>
  )
);

export default router;
