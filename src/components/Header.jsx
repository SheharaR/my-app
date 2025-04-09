import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Box,
  InputBase,
  Badge,
  Avatar
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';

// Create a styled search component
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  width: '100%',
  maxWidth: '300px',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
  display: 'flex',
  alignItems: 'center',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#999',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#333',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

const Header = ({ title, onMenuClick }) => {
  return (
    <AppBar 
      position="sticky" 
      color="transparent" 
      elevation={0}
      sx={{ 
        borderBottom: '1px solid #e0e0e0',
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: { xs: 'block', md: 'none' }, mr: 1 }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={onMenuClick}
                sx={{ color: '#333' }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                color: '#333',
                fontWeight: 600,
                fontSize: '1.5rem',
                letterSpacing: '0.5px'
              }}
            >
              {title}
            </Typography>
            
            {/* Search Box - visible on medium and larger screens */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Box>
          </Box>
          
          {/* Header Actions */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" sx={{ color: '#555' }}>
              <Badge badgeContent={4} color="error">
                <EmailIcon />
              </Badge>
            </IconButton>
            
            <IconButton color="inherit" sx={{ color: '#555', ml: 1 }}>
              <Badge badgeContent={7} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            
            <IconButton color="inherit" sx={{ color: '#555', ml: 1 }}>
              <SettingsIcon />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;