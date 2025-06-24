import {
  AppBar,
  Box,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import MainTab from "./MainTab";

export interface tab {
  name: string;
  value: TabValueType;
}

export type TabValueType = "reports" | "another";

declare module "@mui/material/Tabs" {
  interface TabsPropsIndicatorColorOverrides {
    customColor: true;
  }
}

const madorName: string = "מדור UMC";

const slots: number = 5;

const tabs: tab[] = [
  { name: "דיווחים", value: "reports" },
  { name: "חיילים", value: "another" },
];

const tabMap = {
  reports: <MainTab />,
  another: null,
};

const HomeScreen = () => {
  const [currentTab, setCurrentTab] = useState<TabValueType>(tabs[0].value);
  const tabContent = tabMap[currentTab] ?? null;

  return (
    <Box>
      <AppBar position="static" sx={styles.appBar}>
        <Toolbar sx={styles.toolBar}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={styles.hamburgerIcon}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={styles.titleText} variant="h6" component="div">
            Lotem Manpower
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography sx={styles.departmentText}>{madorName}</Typography>
      <Typography
        sx={{
          fontStyle: "Inter",
          fontSize: 11,
          fontWeight: 400,
          marginLeft: 2,
          marginBottom: 3
        }}
      >
        הקצאות: {slots}
      </Typography>

      <Tabs
        value={currentTab}
        onChange={(event: React.SyntheticEvent, value: TabValueType) =>
          setCurrentTab(value)
        }
        indicatorColor="customColor"
        sx={styles.tabs}
      >
        {tabs.map((tab) => (
          <Tab sx={styles.tab} value={tab.value} label={tab.name} />
        ))}
      </Tabs>
      {tabContent}
    </Box>
  );
};

const styles = {
  appBar: {
    backgroundColor: "#4ebaba",
  },
  text: {
    color: "white",
    padding: "2%",
  },
  toolBar: {
    justifyContent: "center",
    position: "relative",
    color: "black",
  },
  hamburgerIcon: {
    position: "absolute",
    left: 15,
    height: 30,
    width: 30,
  },
  titleText: {
    fontStyle: "Inter",
    fontSize: 18,
    fontWeight: 700,
  },
  departmentText: {
    fontStyle: "Inter",
    fontWeight: 700,
    fontSize: 13,
    margin: "16px 0px 0px 16px",
  },
  tabs: {
    minHeight: 28,
    height: 28,
  },
  tab: {
    "&.Mui-selected": {
      color: "white",
      backgroundColor: "#77d5d5",
    },
    backgroundColor: "#4ebaba",
    color: "white",
    width: 98,
    fontSize: 11,
    justifyContent: "unset",
    padding: 1,
    textAlign: "center",
    borderRadius: "8%",
  },
};

export default HomeScreen;
