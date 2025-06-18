import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

const LoginPage = () => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (userName === "admin@example.com" && password === "admin") {
      login();
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

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
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            התחברות
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
