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
import { Link, useNavigate } from 'react-router-dom';
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
import axios from 'axios';

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));  
  const [open, setOpen] = useState(false);  
  const navigate = useNavigate();  
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
  

  return (
    <Box>
      {isMobile && (
        <AppBar position="sticky">
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
            <Typography variant="h6">LITHU FASHIONS</Typography>
          </Toolbar>
        </AppBar>
      )}

      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: '#333',  
            color: 'white',
            paddingTop: '20px',
          },
        }}
        variant={isMobile ? 'temporary' : 'permanent'}
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,  
        }}
      >
        {/* Default Avatar and Username */}
        <Box sx={{ textAlign: 'center', padding: '10px', marginBottom: '20px' }}>
          <Avatar sx={{ bgcolor: 'gray', width: '100px', height: '100px', margin: '0 auto' }}>
            <PersonIcon sx={{ fontSize: '50px' }} />
          </Avatar>
          {loading ? (
            <CircularProgress sx={{ color: 'white', mt: 1 }} size={20} />
          ) : (
            <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 600, mt: 1 }}>
              {username || 'Guest User'}
            </Typography>
          )}
        </Box>

        <List>
          <Divider sx={{ bgcolor: 'white' }} />
          <ListItem button component={Link} to="/inventory">
            <ListItemIcon>
              <InventoryIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Inventory" />
          </ListItem>
          <Divider sx={{ bgcolor: 'white' }} />
          <ListItem button component={Link} to="/orders">
            <ListItemIcon>
              <ShoppingCartIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
          <Divider sx={{ bgcolor: 'white' }} />
          <ListItem button component={Link} to="/transactions">
            <ListItemIcon>
              <PaidIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Transactions" />
          </ListItem>
          <Divider sx={{ bgcolor: 'white' }} />
          <ListItem button component={Link} to="/debts">
            <ListItemIcon>
              <MoneyOffIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Debts" />
          </ListItem>
          <Divider sx={{ bgcolor: 'white' }} />
          <ListItem button component={Link} to="/clients">
            <ListItemIcon>
              <PeopleIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Clients" />
          </ListItem>
          <Divider sx={{ bgcolor: 'white' }} />
          <ListItem button component={Link} to="/employees">
            <ListItemIcon>
              <GroupIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Employees" />
          </ListItem>
        </List>

        <Box sx={{ position: 'absolute', bottom: '20px', width: '80%', left: '10px', backgroundColor: '#1976d2', borderRadius: '10px' }}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleLogout}
            startIcon={<ExitToAppIcon />}
            sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
          >
            Logout
          </Button>
        </Box>
      </Drawer>

      <Box sx={{ marginLeft: isMobile ? 0 : 240, transition: 'margin 0.3s' }}>
      </Box>
    </Box>
  );
};

export default Sidebar;
