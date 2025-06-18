import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./components/AuthContext";
import LoginPage from "./pages/LoginPage";
import { createTheme, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";
import RaanPage from "./pages/RaanPage";
import NotFound from "./pages/NotFound";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

const App = () => {
  const routes = [
    { path: "/", element: <LoginPage /> },
    { path: "/dashboard", element: <RaanPage /> },
    { path: "*", element: <NotFound /> },
  ];
  const theme = createTheme({
    direction: "rtl",
  });
  const rtlCache = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, stylisRTLPlugin],
  });

  ModuleRegistry.registerModules([AllCommunityModule]);

  return (
    <AuthProvider>
      <CacheProvider value={rtlCache}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
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
          </BrowserRouter>
        </ThemeProvider>
      </CacheProvider>
    </AuthProvider>
  );
};

export default App;
