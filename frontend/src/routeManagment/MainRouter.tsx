import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";
import RaanPage from "../pages/RaanPage";
import ProtectedRoute from "../components/ProtectedRoute";



const MainRouter = () => {
    const routes = [
    { path: "/", element: <LoginPage /> },
    { path: "/dashboard", element: <RaanPage /> },
    { path: "*", element: <NotFound /> },
  ];

  return (<BrowserRouter>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    ["/", "*"].includes(route.path) ? (
                      route.element
                    ) : (
                      <ProtectedRoute>{route.element}</ProtectedRoute>
                    )
                  }
                />
              ))}
            </Routes>
          </BrowserRouter>);
}


export default MainRouter;