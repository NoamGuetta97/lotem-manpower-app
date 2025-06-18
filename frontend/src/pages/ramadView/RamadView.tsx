import { Box, IconButton, Stack, Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { AG_GRID_LOCALE_IL } from "@ag-grid-community/locale";
import image from "../../assets/background_2.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SoliderRow {
  soliderName: string;
  report: string;
  actions?: any; // You can later define a more specific type if needed
}

const RamadView = () => {
  const userName: string = "שורק השורק";
  const rows: SoliderRow[] = [
    {
      soliderName: "איציק המלך",
      report: "לוטם",
      actions: (
        <IconButton>
          <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
        </IconButton>
      ),
    },
    {
      soliderName: "אדיר dfsfd",
      report: "כוננות-בית",
    },
    {
      soliderName: "שאול המלך",
      report: "כוננות-בית",
    },
    // {
    //   soliderName: "שאול המלך",
    //   report: "כוננות-בית",
    // },
    // {
    //   soliderName: "שאול המלך",
    //   report: "כוננות-בית",
    // },
    // {
    //   soliderName: "שאול המלך",
    //   report: "כוננות-בית",
    // },
    // {
    //   soliderName: "שאול המלך",
    //   report: "כוננות-בית",
    // },
    // {
    //   soliderName: "שאול המלך",
    //   report: "כוננות-בית",
    // },
    // {
    //   soliderName: "שאול המלך",
    //   report: "כוננות-בית",
    // },
    // {
    //   soliderName: "שאול המלך",
    //   report: "כוננות-בית",
    // },
    // {
    //   soliderName: "שאול המלך",
    //   report: "כוננות-בית",
    // },
    // {
    //   soliderName: "שאול המלך",
    //   report: "כוננות-בית",
    // },
    // {
    //   soliderName: "שאול המלך",
    //   report: "כוננות-בית",
    // },
    // {
    //   soliderName: "שאול המלך",
    //   report: "כוננות-בית",
    // },
    // {
    //   soliderName: "שאול המלך",
    //   report: "כוננות-בית",
    // },
    // {
    //   soliderName: "שאול המלך",
    //   report: "כוננות-בית",
    // },
  ];

  const colDefs: any[] = [
    { field: "soliderName", headerName: "שם חייל" },
    { field: "report", headerName: "דיווח" },
    { field: "actions", headerName: "פעולות" },
  ];

  return (
    <Box sx={styles.background}>
      <Typography sx={{ color: "white", padding: "2%" }}>
        שלום, {userName}
      </Typography>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h5" sx={{ color: "white" }}>
          חיילים ודיווחים
        </Typography>
        <style>{style}</style>
        <div style={{ height: "87vh", width: "95vw" }}>
          <div
            style={{ height: "100%", width: "100%" }}
            className="ag-theme-alpine"
          >
            <AgGridReact
              rowData={rows}
              columnDefs={colDefs}
              enableRtl={true}
              localeText={AG_GRID_LOCALE_IL}
              autoSizeStrategy={{ type: "fitGridWidth" }}
            />
          </div>
        </div>
      </Stack>
    </Box>
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

const style = `
  .ag-theme-alpine {
    --ag-header-background-color: #5eaec7;
    --ag-odd-row-background-color:rgb(233, 243, 237);
    --ag-even-row-background-color: #f2f9ff;
    --ag-foreground-color:rgb(3, 59, 114);
    --ag-border-color:rgb(124, 192, 214);
    --ag-selected-row-background-color: rgb(108, 164, 216);
  }
`;

export default RamadView;
