import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./components/AuthContext";
import LoginPage from "./pages/LoginPage";
import RamadPage from "./pages/RamadPage";
import { createTheme, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";

const App = () => {
  const routes = [
    { path: "/", element: <LoginPage /> },
    { path: "/dashboard", element: <RamadPage /> },
  ];
  const theme = createTheme({
    direction: "rtl",
  });
  const rtlCache = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, stylisRTLPlugin],
  });

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
                    route.path === "/" ? (
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
