import { Stack, Typography, useTheme } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { AG_GRID_LOCALE_IL } from "@ag-grid-community/locale";
import image from "../../assets/background_2.jpeg";

interface SoliderRow {
  soliderName: string;
  report: string;
  actions?: any; // You can later define a more specific type if needed
}

const RamadView = () => {
  const userName: string = "מר רמד";
  const rows: SoliderRow[] = [
    {
      soliderName: "איציק המלך",
      report: "לוטם",
    },
    {
      soliderName: "אדיר dfsfd",
      report: "כוננות-בית",
    },
    {
      soliderName: "שאול המלך",
      report: "כוננות-בית",
    },
  ];

  const colDefs: any[] = [
    { field: "soliderName", headerName: "שם חייל" },
    { field: "report", headerName: "דיווח" },
    { field: "actions", headerName: "פעולות" },
  ];

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={4}
      sx={styles.background}
    >
      <Typography sx={{ color: "secondary.main" }}>
        שלום, {userName}
        <br />
        חיילים ודיווחים
      </Typography>
      <div style={{ height: 500, width: "100%" }} className="ag-theme-material">
        <AgGridReact
          rowData={rows}
          columnDefs={colDefs}
          enableRtl={true}
          localeText={AG_GRID_LOCALE_IL}
          autoSizeStrategy={{ type: "fitGridWidth" }}
        />
      </div>
    </Stack>
  );
};

const styles = {
  background: {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
  },
};

export default RamadView;
