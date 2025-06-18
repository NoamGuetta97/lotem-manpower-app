import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" mt={10}>
      <Typography variant="h3" gutterBottom>
        דף לא נמצא
      </Typography>
      <Typography variant="body1" gutterBottom>
        הדף שנכנסת אינו קיים או הוסר מהאתר.
      </Typography>
      <Button variant="outlined" fullWidth onClick={() => navigate("/")}>
        להתחברות
      </Button>
    </Box>
  );
};

export default NotFound;
