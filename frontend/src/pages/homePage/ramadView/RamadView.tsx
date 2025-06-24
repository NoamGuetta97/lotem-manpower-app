import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import type { ReportType } from "../../../constData/userReport";
import SearchBar from "./components/SearchBar";
import RamadTable from "./components/RamadTable";

export interface SoliderRow {
  soliderName: string;
  report: ReportType;
  actions?: any; // You can later define a more specific type if needed
}

const madorName: string = "מדור UMC";

const rows: SoliderRow[] = [
  {
    soliderName: "איציק המלך",
    report: "בסיס",
  },
  {
    soliderName: "אדיר dfsfd",
    report: "כוננות-בית",
  },
  {
    soliderName: "שאול המלך",
    report: "כוננות-בית",
  },
  {
    soliderName: "נועם רוזיליו",
    report: "כוננות-בית",
  },
  {
    soliderName: "sdff רוזיליו",
    report: "כוננות-בית",
  },
  {
    soliderName: "hfdggfds",
    report: "כוננות-בית",
  },
  {
    soliderName: "fgddgfa",
    report: "כוננות-בית",
  },
  {
    soliderName: "dfgda",
    report: "כוננות-בית",
  },
];

const RamadView = () => {
  const [soliders, setSoliders] = useState<SoliderRow[]>(rows);
  const [shownSolider, setShownSolider] = useState<SoliderRow[]>(rows);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const solidersToShow = soliders.filter((solider) =>
      solider.soliderName.includes(searchValue)
    );

    setShownSolider(solidersToShow);
  }, [searchValue]);

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.text}>{soliders.length} חיילים\ות</Typography>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      ></SearchBar>
      <RamadTable
        soliders={soliders}
        shownSoliders={shownSolider}
        setSoliders={setSoliders}
        setShownSoliders={setShownSolider}
        searchValue={searchValue}
        madorName={madorName}
      ></RamadTable>
    </Box>
  );
};

const styles = {
  container: {
    backgroundColor: "#77d5d5",
    height: "85vh",
    width: "100%",
  },
  text: {
    color: "white",
    fontStyle: "Inter",
    fontWeight: 900,
    fontSize: 12,
    paddingLeft: 3,
    paddingTop: 3,
  },
};

export default RamadView;
