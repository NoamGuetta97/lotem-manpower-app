import { Box, IconButton, Stack, Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { AG_GRID_LOCALE_IL } from "@ag-grid-community/locale";
import image from "../../assets/background_2.jpeg";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useState } from "react";
import EditReportModal from "./components/EditReportModal";
import type { ReportType } from "../../constData/userReport";

export interface SoliderRow {
  soliderName: string;
  report: ReportType;
  actions?: any; // You can later define a more specific type if needed
}

const userName: string = "שורק השורק";
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
  {
    soliderName: "נועם רוזיליו",
    report: "כוננות-בית",
  },
];

const RamadView = () => {
  const [openEdit, setOpenModal] = useState(false);
  const [chosenSolider, setChosenSolider] = useState<SoliderRow | null>(null);
  const [soliders, setSoliders] = useState<SoliderRow[]>(rows);

  const handleClickOpen = (row: SoliderRow) => {
    setChosenSolider(row);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSave = (report: ReportType) => {
    if (chosenSolider) {
      chosenSolider.report = report;
    }
    setSoliders(soliders);
    handleClose();
  };

  const colDefs: any[] = [
    { field: "soliderName", headerName: "שם חייל" },
    { field: "report", headerName: "דיווח" },
    {
      field: "actions",
      headerName: "פעולות",
      cellRenderer: (params: any) => (
        <IconButton onClick={() => handleClickOpen(params.data)}>
          <ModeEditIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Box sx={styles.background}>
      <Typography sx={styles.text}>שלום, {userName}</Typography>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h5" sx={styles.text}>
          חיילים ודיווחים
        </Typography>
        <style>{style}</style>
        <div style={styles.agHeightRestriction}>
          <div style={styles.agContainer} className="ag-theme-alpine">
            <AgGridReact
              rowData={soliders}
              columnDefs={colDefs}
              enableRtl={true}
              localeText={AG_GRID_LOCALE_IL}
              autoSizeStrategy={{ type: "fitGridWidth" }}
            />
          </div>
        </div>
      </Stack>
      <EditReportModal
        chosenSolider={chosenSolider}
        open={openEdit}
        onClose={handleClose}
        handleSave={handleSave}
      ></EditReportModal>
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
  text: {
    color: "white",
    padding: "2%",
  },
  agContainer: {
    height: "100%",
    width: "100%",
  },
  agHeightRestriction: {
    height: "87vh",
    width: "95vw",
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
