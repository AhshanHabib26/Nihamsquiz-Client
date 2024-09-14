import { TopNavMenu } from "@/shared/Navbar/TopNavMenu";
import { MainNav } from "./MainNav";

export const NavLyout = () => {
  return (
    <div className=" bg-[#001D25]">
      <TopNavMenu />
      <hr className=" border-[#063846] border-dashed " />
      <MainNav />
    </div>
  );
};
