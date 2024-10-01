import { Outlet } from "react-router-dom";
// import "./mainlayout.css";
import { NavBar } from "./NavBar";
interface Props {
  banner?: string;
  title?: string;
  subtitle?: string;
  children?: any;
}
export const MainLayout = ({ children, banner, title,subtitle }: Props) => {
  return (
    <div className="bg-stone-200">
      <NavBar banner={banner} title={title} subtitle={subtitle} />
      <main>{children}</main>
      <Outlet />
    </div>
  );
};
