import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import "./components/LoginPage.css";
import SignupPage from "./components/SignupPage";
import "./components/SignupPage.css";
import OwnerDashboard from "./components/OwnerDashboard";
import Sidebar from './components/Sidebar';
import "./components/Sidebar.css";
import Header from './components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "./components/Sidebar.css";
import LandingPage from "./components/LandingPage";

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
          <Route path="/" element={<LandingPage />} /> {/* Default Route - Login */}
          <Route path="/Login" element={<LoginPage />} /> 
          <Route path="/signup" element={<SignupPage />} /> {/* Signup Page Route */}
          <Route path="/dashboard" element={<OwnerDashboard />} /> {/* Owner Dashboard */}
          <Route path="/inventory" element={<OwnerDashboard />} />
          <Route path="/orders" element={<OwnerDashboard />} />
          <Route path="/transactions" element={<OwnerDashboard />} />
          <Route path="/debts" element={<OwnerDashboard />} />
          <Route path="/clients" element={<OwnerDashboard />} />
          <Route path="/employees" element={<OwnerDashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;