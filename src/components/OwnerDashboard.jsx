import React, { useState } from 'react';
import { 
  Box, 
  Grid, 
  Paper, 
  Typography, 
  Container, 
  Card, 
  CardContent,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import InventoryIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Sidebar from './Sidebar';
import Header from './Header';
import './OwnerDashboard.css';

// Styled components
const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: 16,
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: 'white',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  },
}));

const IconBox = styled(Box)(({ theme, color }) => ({
  backgroundColor: color || '#e3f2fd',
  borderRadius: '50%',
  width: 48,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}));

const InfoBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: 8,
  backgroundColor: '#f5f7fb',
  marginTop: theme.spacing(2),
}));

const ActionButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  backgroundColor: '#17254c',
  color: 'white',
  padding: theme.spacing(2),
  borderRadius: 8,
  width: '100%',
  justifyContent: 'flex-start',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#0d1b3a',
  }
}));

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Chart data for the stock report
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <Box sx={{ display: 'flex' }} className="dashboard-container">
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, overflow: 'auto' }} className="main-content">
        <Header title="LITHU FASHIONS" onMenuClick={handleMenuToggle} />
        
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }} className="dashboard-content">
          {/* Stats Cards Row */}
          <Grid container spacing={3} sx={{ mb: 4 }} className="stats-container">
            <Grid item xs={12} sm={6} md={3}>
              <StatCard className="stat-card">
                <CardContent sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconBox color="#e1f5fe">
                      <InventoryIcon color="primary" />
                    </IconBox>
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                        1545 items
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Today's Sale
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </StatCard>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <StatCard className="stat-card">
                <CardContent sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconBox color="#fff8e1">
                      <AttachMoneyIcon sx={{ color: '#ffb74d' }} />
                    </IconBox>
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                        Rs. 65,553.00
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Daily Income
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </StatCard>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <StatCard className="stat-card">
                <CardContent sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconBox color="#e8f5e9">
                      <ShoppingBagIcon sx={{ color: '#66bb6a' }} />
                    </IconBox>
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                        08
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Ongoing Orders
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </StatCard>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <StatCard className="stat-card">
                <CardContent sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconBox color="#f3e5f5">
                      <StorefrontIcon sx={{ color: '#ab47bc' }} />
                    </IconBox>
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                        343
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Items in Stock
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </StatCard>
            </Grid>
          </Grid>
          
          {/* Main Content Sections */}
          <Grid container spacing={3} className="charts-container">
            {/* Stock Report Section */}
            <Grid item xs={12} lg={8}>
              <Paper sx={{ p: 3, borderRadius: 2, height: '100%' }} className="chart-paper">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" component="h2">
                    Stock Report
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                      <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#2196f3', mr: 1 }}></Box>
                      <Typography variant="body2">Stock In</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#9c27b0', mr: 1 }}></Box>
                      <Typography variant="body2">Stock Out</Typography>
                    </Box>
                  </Box>
                </Box>
                
                {/* This is a placeholder for the chart. In a real implementation, you'd use a library like recharts */}
                <Box sx={{ height: 300, position: 'relative' }} className="chart-container">
                  <Box sx={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: 0, 
                    bottom: 0, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between'
                  }} className="chart-labels">
                    {['25000', '20000', '15000', '10000', '5000', '0'].map((label) => (
                      <Typography key={label} variant="caption" color="text.secondary">
                        {label}
                      </Typography>
                    ))}
                  </Box>
                  
                  <Box sx={{ 
                    display: 'flex', 
                    height: '100%', 
                    alignItems: 'flex-end', 
                    pl: 5, 
                    pt: 2,
                    justifyContent: 'space-between'
                  }} className="chart-bars">
                    {months.map((month, idx) => (
                      <Box key={month} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '6%' }} className="chart-bar">
                        <Box sx={{ 
                          width: '100%', 
                          display: 'flex', 
                          flexDirection: 'column',
                          height: `${Math.random() * 200 + 50}px`,
                        }}>
                          <Box sx={{ 
                            bgcolor: '#9c27b0', 
                            height: `${Math.random() * 40 + 10}%`,
                            width: '100%',
                          }} className="stock-out-bar"></Box>
                          <Box sx={{ 
                            bgcolor: '#2196f3', 
                            height: `${Math.random() * 60 + 40}%`,
                            width: '100%',
                          }} className="stock-in-bar"></Box>
                        </Box>
                        <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
                          {month}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Grid>
            
            {/* Price Calculations Section */}
            <Grid item xs={12} lg={4}>
              <Paper sx={{ p: 2, borderRadius: 2, height: '100%', display: 'flex', flexDirection: 'column' }} className="price-calc-paper">
                <Typography variant="h6" component="h2" sx={{ mb: 4 }}>
                  Price Calculations
                </Typography>
                
                <ActionButton className="action-button">
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
                    <Box component="span" sx={{ mr: 2 }}>
                      📄
                    </Box>
                    <Typography>Final Price</Typography>
                  </Box>
                </ActionButton>
                
                <ActionButton className="action-button">
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
                    <Box component="span" sx={{ mr: 2 }}>
                      🏷️
                    </Box>
                    <Typography>On - Point Price</Typography>
                  </Box>
                </ActionButton>

                <Box sx={{ flexGrow: 1 }} />
                
                <InfoBox className="info-box">
                  <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                    Rising Employees
                  </Typography>
                </InfoBox>
                
                <InfoBox sx={{ mt: 2, mb: 2 }} className="info-box">
                  <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                    Rising Clients
                  </Typography>
                </InfoBox>
              </Paper>
            </Grid>
          </Grid>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4, mb: 2 }} className="report-actions">
            <Button 
              variant="text" 
              sx={{ color: '#333' }}
              className="see-more-btn"
            >
              See more reports
            </Button>
            
            <Button 
              variant="text" 
              endIcon={<ArrowDropDownIcon />} 
              sx={{ color: '#2196f3' }}
              className="report-dropdown"
            >
              Report 1
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;