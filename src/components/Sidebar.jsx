import './Sidebar.css';

import {
  AppBar,
  Avatar,
  Box,
  Button,
  CircularProgress,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaidIcon from '@mui/icons-material/Paid';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import PeopleIcon from '@mui/icons-material/People';
import GroupIcon from '@mui/icons-material/Group';
import DashboardIcon from '@mui/icons-material/Dashboard';
import axios from 'axios';

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));  
  const [open, setOpen] = useState(false);  
  const navigate = useNavigate();
  const location = useLocation();  
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.clear(); 
    navigate('/');
  };

  useEffect(() => {
    const fetchUsername = async () => {
      const token = localStorage.getItem('token'); 
      try {
        const response = await axios.get('http://localhost:4000/api/guides/get_guide', {
          headers: {
            token: token
          }
        });
        // Access the supervisor_name within the user object
        setUsername(response.data.user.supervisor_name); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching username:', error);
        setLoading(false);
      }
    };
  
    fetchUsername();
  }, []);

  // Check if current path matches menu item path
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  // Menu items configuration
  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Inventory", icon: <InventoryIcon />, path: "/inventory" },
    { text: "Orders", icon: <ShoppingCartIcon />, path: "/orders" },
    { text: "Transactions", icon: <PaidIcon />, path: "/transactions" },
    { text: "Debts", icon: <MoneyOffIcon />, path: "/debts" },
    { text: "Clients", icon: <PeopleIcon />, path: "/clients" },
    { text: "Employees", icon: <GroupIcon />, path: "/employees" },
  ];

  return (
    <Box className="sidebar-container">
      {isMobile && (
        <AppBar position="sticky" elevation={3}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={toggleDrawer}
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ 
              fontWeight: 600,
              letterSpacing: '0.5px',
              flexGrow: 1
            }}>
              LITHU FASHIONS
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      <Drawer
        className={open ? "sidebar open" : "sidebar"}
        sx={{
          width: 260,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 260,
            boxSizing: 'border-box',
            background: 'linear-gradient(180deg, #2c3e50 0%, #1a2639 100%)',
            color: 'white',
            padding: 0,
            boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
          },
        }}
        variant={isMobile ? 'temporary' : 'permanent'}
        anchor="left"
        open={isMobile ? open : true}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,  
        }}
      >
        {/* Avatar and Username Section */}
        <Box className="avatar-container">
          <Avatar 
            className="sidebar-avatar"
            sx={{ 
              bgcolor: '#3498db', 
              width: '90px', 
              height: '90px', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              border: '3px solid rgba(255,255,255,0.3)'
            }}
          >
            <PersonIcon sx={{ fontSize: '50px' }} />
          </Avatar>
          
          {loading ? (
            <CircularProgress sx={{ color: 'white', mt: 1 }} size={20} />
          ) : (
            <Typography 
              className="sidebar-username"
              variant="subtitle1" 
              sx={{ 
                color: 'white', 
                fontWeight: 600,
                letterSpacing: '0.5px'
              }}
            >
              {username || 'Guest User'}
            </Typography>
          )}
        </Box>

        <List sx={{ mt: 1, padding: 0 }}>
          {menuItems.map((item, index) => (
            <React.Fragment key={item.text}>
              {index > 0 && <Divider className="sidebar-divider" />}
              <ListItem 
                button 
                component={Link} 
                to={item.path}
                className={`sidebar-menu-item ${isActive(item.path) ? 'active' : ''}`}
                sx={{
                  padding: '12px 20px',
                  margin: '4px 8px',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateX(5px)'
                  },
                  ...(isActive(item.path) && {
                    backgroundColor: 'rgba(52, 152, 219, 0.7)',
                  })
                }}
              >
                <ListItemIcon sx={{ color: 'rgba(255, 255, 255, 0.8)', minWidth: '40px' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  primaryTypographyProps={{
                    fontSize: '14px',
                    fontWeight: 500
                  }}
                />
              </ListItem>
            </React.Fragment>
          ))}
        </List>

        <Box className="logout-button-container" sx={{ 
          padding: '16px', 
          position: 'absolute', 
          bottom: '20px', 
          width: 'calc(100% - 32px)',
        }}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleLogout}
            startIcon={<ExitToAppIcon />}
            className="logout-button"
            sx={{ 
              background: 'linear-gradient(45deg, #e74c3c, #c0392b)',
              color: 'white',
              borderRadius: '8px',
              padding: '10px 16px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              '&:hover': {
                background: 'linear-gradient(45deg, #c0392b, #e74c3c)',
                boxShadow: '0 6px 10px rgba(0,0,0,0.2)',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Logout
          </Button>
        </Box>
      </Drawer>

      <Box className="content" sx={{ 
        marginLeft: isMobile ? 0 : '260px', 
        transition: 'margin 0.3s',
        width: isMobile ? '100%' : 'calc(100% - 260px)',
      }}>
        {/* Content goes here */}
      </Box>
    </Box>
  );
};

export default Sidebar;