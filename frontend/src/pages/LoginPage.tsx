import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { CustomAlert } from "../components/CustomAlert";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginPage = () => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (userName === "admin" && password === "admin") {
      login();
      navigate("/home");
    } else {
      CustomAlert({
        title: "שגיאת התחברות",
        text: "שם המשתמש או הסיסמה אינם נכונים.",
      });
    }
  };

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 8 }}>
        <Typography variant="h5" align="center" gutterBottom>
          התחברות למערכת ניהול נוכחות בבסיס לוטם
        </Typography>
        <Box component="form" onSubmit={handleSubmit} dir="rtl">
          <TextField
            label="שם משתמש"
            type="userName"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
          />
          <TextField
            label="סיסמה"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            disabled={!userName || !password}
          >
            התחברות
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
