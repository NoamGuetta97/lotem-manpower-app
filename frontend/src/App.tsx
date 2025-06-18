import { AuthProvider } from "./components/AuthContext";
import { createTheme, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import MainRouter from "./routeManagment/MainRouter";

const App = () => {
  const theme = createTheme({
    direction: "rtl",
    palette: {
      mode: "light",
      primary: { main: "#88cfbf" },
      secondary: { main: "#77c0bc" },
      background: { default: "#f5f5f5" },
    },
    typography: {
      fontFamily: "Aharoni",
    },
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
          <MainRouter />
        </ThemeProvider>
      </CacheProvider>
    </AuthProvider>
  );
};

export default App;
