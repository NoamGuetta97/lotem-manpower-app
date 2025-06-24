import {
  Box,
  IconButton,
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { GiHillConquest } from "react-icons/gi";
import type { SoliderRow } from "../RamadView";
import EditReportModal from "./EditReportModal";
import type { ReportType } from "../../../../constData/userReport";

export interface RamadTableProps {
  soliders: SoliderRow[];
  shownSoliders: SoliderRow[];
  setSoliders: React.Dispatch<React.SetStateAction<SoliderRow[]>>;
  setShownSoliders: React.Dispatch<React.SetStateAction<SoliderRow[]>>;
  searchValue: string;
  madorName: string;
}

const RamadTable = ({
  soliders,
  shownSoliders,
  setShownSoliders,
  setSoliders,
  searchValue,
  madorName,
}: RamadTableProps) => {
  const [openEdit, setOpenModal] = useState(false);
  const [chosenSolider, setChosenSolider] = useState<SoliderRow | null>(null);

  const atHomeSoliders = useMemo(
    () => soliders.filter((solider) => solider.report === "כוננות-בית").length,
    [soliders]
  );

  const atBaseSoliders = useMemo(
    () => soliders.filter((solider) => solider.report === "בסיס").length,
    [soliders]
  );

  useEffect(() => {
    const solidersToShow = soliders.filter((solider) =>
      solider.soliderName.includes(searchValue)
    );

    setShownSoliders(solidersToShow);
  }, [searchValue]);

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
    setSoliders([...soliders]);
    handleClose();
  };

  return (
    <Box>
      <Box sx={styles.tableContainer}>
        <Table sx={styles.table}>
          <TableHead>
            <TableRow key={madorName} sx={styles.tableHeaderRow}>
              <TableCell sx={styles.tableCellHeader} align="left">
                סה"כ {madorName}
              </TableCell>
              <TableCell sx={styles.tableCellHeader} align="left">
                <Box sx={styles.calcIconContainer}>
                  <Box sx={styles.calcIcon}>
                    <FiHome /> {atHomeSoliders}
                  </Box>
                  <Box sx={styles.calcIcon}>
                    <GiHillConquest /> {atBaseSoliders}
                  </Box>
                </Box>
              </TableCell>
              <IconButton sx={styles.checkmarkHeaderIcon} size="medium">
                <IoCheckmarkSharp />
              </IconButton>
            </TableRow>
          </TableHead>
          {shownSoliders.map((row) => (
            <TableRow key={row.soliderName} sx={styles.tableRowContent}>
              <TableCell sx={styles.tableCellContent} align="left">
                {row.soliderName}
              </TableCell>
              <TableCell sx={styles.tableCellContent} align="left">
                {row.report}
              </TableCell>
              <IconButton
                sx={styles.editIcon}
                onClick={() => handleClickOpen(row)}
                size="small"
              >
                <FaRegEdit />
              </IconButton>
              <IconButton
                sx={styles.checkmarkContentIcon}
                onClick={() => handleClickOpen(row)}
                size="small"
              >
                <IoCheckmarkSharp />
              </IconButton>
            </TableRow>
          ))}
        </Table>
      </Box>

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
  tableContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  table: {
    width: "74%",
  },
  tableHeaderRow: {
    height: 30,
    borderBottom: "3px solid white",
  },
  tableCellHeader: {
    height: 30,
    padding: "0 8px",
    color: "white",
  },
  calcIconContainer: {
    display: "flex",
    alignItems: "center",
    gap: 1.5,
  },
  calcIcon: {
    display: "flex",
    alignItems: "center",
    gap: 0.5,
  },
  checkmarkHeaderIcon: {
    color: "white",
  },
  tableRowContent: {
    color: "white",
    height: 30,
  },
  tableCellContent: {
    height: 30,
    padding: "0 8px",
  },
  editIcon: {
    color: "white",
    padding: 0.5,
  },
  checkmarkContentIcon: {
    color: "white",
    padding: 0.1,
  },
};

export default RamadTable;
