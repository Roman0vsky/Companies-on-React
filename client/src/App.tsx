import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home, { dashboardLoader } from "./pages/Home";
import Login, { loginLoader } from "./pages/Login";
import Register, { registerLoader } from "./pages/Register";
import RootLayout from "./layouts/RootLayout";
import Companies, { companiesLoader } from "./pages/Companies";
import DashboardLayout from "./layouts/DashboardLayout";
import NotFound from "./components/ui/NotFound";
import { Navigate } from "react-router-dom";

import { APP_ROUTES } from "./utils/constants";
import ProtectedRoute from "./components/ui/ProtectedRoute";
import Company, { companyLoader } from "./pages/Company";
import AddCompany from "./pages/AddCompany";
import PersonalCabinet from "./pages/PersonalCabinet";
import store from "./store";
import { useSelector } from "react-redux";
import { IStore } from "./store/interfaces/store.interface";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Navigate to={APP_ROUTES.CATALOG} />} />

        <Route
          path={APP_ROUTES.LOGIN}
          element={<Login />}
          loader={loginLoader}
        />
        <Route
          path={APP_ROUTES.REGISTER}
          element={<Register />}
          loader={registerLoader}
        />

        <Route element={<ProtectedRoute role='user' />}>
          <Route index element={<Navigate to={APP_ROUTES.CATALOG} />} />

          <Route path={APP_ROUTES.CATALOG} element={<DashboardLayout />}>
            <Route index element={<Home />} loader={dashboardLoader} />
            <Route
              path={`${APP_ROUTES.CATALOG}/:name`}
              element={<Companies />}
              loader={companiesLoader}
            />
            <Route
              path={`${APP_ROUTES.CATALOG}/:name/:id`}
              element={<Company />}
              loader={companyLoader}
            />
            <Route
              path='companies/add'
              element={<AddCompany />}
              loader={dashboardLoader}
            />
            <Route
              path='cabinet'
              element={<PersonalCabinet />}
              loader={dashboardLoader}
            />
          </Route>
        </Route>

        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
