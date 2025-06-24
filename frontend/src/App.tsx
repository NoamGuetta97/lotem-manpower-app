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
