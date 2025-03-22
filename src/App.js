import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import "./components/LoginPage.css";
import SignupPage from "./components/SignupPage";
import "./components/SignupPage.css";
import Dashboard from "./components/Dashboard";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "./components/Sidebar.css";

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#17254c',
    },
    background: {
      default: '#f5f7fb',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} /> {/* Default Route - Login */}
          <Route path="/signup" element={<SignupPage />} /> {/* Signup Page Route */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Owner Dashboard */}
          <Route path="/inventory" element={<Dashboard />} />
          <Route path="/orders" element={<Dashboard />} />
          <Route path="/transactions" element={<Dashboard />} />
          <Route path="/debts" element={<Dashboard />} />
          <Route path="/clients" element={<Dashboard />} />
          <Route path="/employees" element={<Dashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;