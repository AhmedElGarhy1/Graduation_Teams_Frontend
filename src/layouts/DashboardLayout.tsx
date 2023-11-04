// import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
// import Header from "../components/shared/Header";
// import TempLogin from "../components/shared/Testing/TempLogin";
// import { selectUser } from "../store/slices/AuthSlice";

const DashboardLayout = () => {
  // const user = useSelector(selectUser);

  // if (!user) return <TempLogin />;
  return (
    <main>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </main>
  );
};

export default DashboardLayout;
