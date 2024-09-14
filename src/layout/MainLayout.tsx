import { Outlet } from "react-router-dom";
import { NavLyout } from "../shared/Navbar/NavLyout";
import Footer from "@/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavLyout />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
