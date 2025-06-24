import {
  Dialog,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import type { SoliderRow } from "../RamadView";
import type { ReportType } from "../../../../constData/userReport";

interface EditReportModalProps {
  open: boolean;
  onClose: () => void;
  handleSave: (report: ReportType) => void;
  chosenSolider: SoliderRow | null;
}

const soliderLocOptions: ReportType[] = ["בסיס", "כוננות-בית", "אחר"];

const EditReportModal = ({
  onClose,
  open,
  chosenSolider,
  handleSave,
}: EditReportModalProps) => {
  const [soliderLoc, setSoliderLoc] = useState<ReportType | null>(null);

  useEffect(() => {
    if (chosenSolider) {
      setSoliderLoc(chosenSolider.report);
    }
  }, [chosenSolider]);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    location: ReportType
  ) => {
    if (location) {
      setSoliderLoc(location);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={styles.title}>
        איפה החייל {chosenSolider?.soliderName} נמצא?
      </DialogTitle>
      <ToggleButtonGroup
        sx={styles.toggleButtonGroup}
        color="primary"
        value={soliderLoc}
        exclusive
        onChange={handleChange}
      >
        {soliderLocOptions.map((option) => (
          <ToggleButton sx={styles.toggleButton} value={option}>
            {option}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <DialogContentText paddingLeft={2}>הערות:</DialogContentText>
      <TextField
        sx={styles.commentsText}
        id="outlined-multiline-flexible"
        multiline
        maxRows={3}
      />
      <IconButton
        sx={styles.okButton}
        onClick={() => {
          if (soliderLoc) {
            handleSave(soliderLoc);
          }
        }}
      >
        <CheckCircleIcon fontSize="large" sx={styles.okIcon} />
      </IconButton>
    </Dialog>
  );
};

const styles = {
  title: {
    alignSelf: "center",
  },
  toggleButton: {
    fontFamily: "initial",
  },
  toggleButtonGroup: {
    alignSelf: "center",
  },
  commentsText: {
    marginBottom: 2,
    marginX: 2,
  },
  okButton: {
    borderRadius: "50%",
    width: 48,
    height: 48,
    alignSelf: "center",
  },
  okIcon: {
    color: "green",
  },
};

export default EditReportModal;
