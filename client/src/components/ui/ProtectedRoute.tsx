import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import store from "src/store";
import { IStore } from "src/store/interfaces/store.interface";
import { APP_ROUTES } from "src/utils/constants";

interface Props {
  redirectPath?: string;
  role: string;
}

export default function ProtectedRoute({ role }: Props) {
  const user = useSelector((store: IStore) => store.auth.user);

  if (user === null || !user.roles.includes(role)) {
    return <Navigate to={APP_ROUTES.LOGIN} replace={true} />;
  }

  return <Outlet />;
}
