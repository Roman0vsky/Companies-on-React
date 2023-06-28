import { Outlet } from "react-router-dom";
import GlobalStyles from "src/globalStyles";
import { Provider } from "react-redux";
import store from "src/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Outlet />
    </Provider>
  );
}
