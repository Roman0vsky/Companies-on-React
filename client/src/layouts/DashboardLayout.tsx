import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";

export default function DashboardLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
