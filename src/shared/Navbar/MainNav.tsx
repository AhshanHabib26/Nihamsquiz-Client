import { CircleUser, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useNavigate } from "react-router-dom";
import Container from "@/utils/Container";
import { useAppSelector } from "@/redux/hooks";
import {
  logout,
  selectCurrentUser,
  useCurrentToken,
} from "@/redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import logoImg from "../../assets/icons/ideas.png";

export const MainNav = () => {
  const token = useAppSelector(useCurrentToken);
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout());
    navigate("/")

  };

  return (
    <div>
      <Container>
        <div className="flex w-full flex-col">
          <header className="sticky top-0 flex h-16 items-center gap-4">
            <nav className="hidden w-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-4 md:text-sm lg:gap-5">
              <Link
                to="/"
                className="flex items-center gap-2 text-lg font-semibold md:text-base text-gray-300 hover:text-gray-50"
              >
                <img src={logoImg} className="w-6 h-6" alt="Nihams Quiz" />
                <span>Nihmasquiz</span>
              </Link>
              <Link
                to="/"
                className=" text-gray-300  hover:text-gray-50 text-[16px]"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="text-gray-300  hover:text-gray-50 text-[16px]"
              >
                About Us
              </Link>
              <Link
                to="/contact-us"
                className="text-gray-300  hover:text-gray-50 text-[16px]"
              >
                Contact Us
              </Link>

              {user?.role === "admin" && (
                <Link
                  to="/dashboard"
                  className="text-gray-300  hover:text-gray-50 text-[16px]"
                >
                  Dashboard
                </Link>
              )}
            </nav>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[250px]">
                <nav className="grid gap-2 text-lg font-medium">
                  <Link
                    to="/"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <img src={logoImg} className="w-6 h-6" alt="Nihams Quiz" />
                    <span>Nihamsquiz</span>
                  </Link>
                  <Link
                    to="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Home
                  </Link>

                  <Link
                    to="/about-us"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/contact-us"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact Us
                  </Link>

                  {user?.role === "admin" && (
                    <Link
                      to="/dashboard"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Dashboard
                    </Link>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
            <div className="flex items-center gap-4 ml-auto lg:mr-auto md:gap-2 lg:gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className=" hover:bg-white"
                  >
                    <CircleUser className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {token ? (
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className=" cursor-pointer"
                    >
                      Logout
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem>
                      <Link to="/register">Register</Link>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
        </div>
      </Container>
    </div>
  );
};
