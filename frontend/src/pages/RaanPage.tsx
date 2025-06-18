import { Stack, Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { AG_GRID_LOCALE_IL } from "@ag-grid-community/locale";

interface DepartmentRow {
  name: string;
  solidersReported: number;
  solidersInBase: number;
  actions?: any; // You can later define a more specific type if needed
}

const RaanPage = () => {
  const soliderAmount = 8;
  const rows: DepartmentRow[] = [
    {
      name: "מדור לוגיסטיקה",
      solidersReported: 12,
      solidersInBase: 10,
    },
    {
      name: "מדור טכנולוגיה",
      solidersReported: 8,
      solidersInBase: 8,
    },
    {
      name: "מדור מודיעין",
      solidersReported: 15,
      solidersInBase: 13,
    },
  ];

  const colDefs: any[] = [
    { field: "name", headerName: "שם מדור" },
    { field: "solidersReported", headerName: "מספר חיילים שדווחו" },
    { field: "solidersInBase", headerName: "מספר חיילים בבסיס" },
    { field: "actions", headerName: "פעולות" },
  ];

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      <Typography>מספר החיילים שהוקצו להגעה עבורך: {soliderAmount}</Typography>

      <Typography>רשימת מדורים</Typography>
      <div style={{ height: 500, width: "100%" }} className="ag-theme-alpine">
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

export default RaanPage;
