import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
} from '@mui/material';
import { Add, Delete, Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar';
import Header from './Header';
import './InventoryList.css';

const InventoryList = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [materials, setMaterials] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Navigate to Add Inventory page
  const handleAddInventory = () => {
    navigate('/inventory-add');
  };

  // Handle material deletion
  const handleDeleteMaterial = async (materialId) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        // Update the API endpoint to match your backend
        await axios.delete(`YOUR_BACKEND_API_URL/api/materials/delete/${materialId}`);
        setMaterials(materials.filter(material => material.materialId !== materialId));
        alert('Material deleted successfully!');
      } catch (error) {
        console.error('Error deleting material:', error);
        alert(error.response?.data?.message || 'Failed to delete material. Please try again.');
      }
    }
  };

  // Fetch materials from API
  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        setLoading(true);
        // Update the API endpoint to match your backend
        const response = await axios.get('YOUR_BACKEND_API_URL/api/materials');
        setMaterials(response.data);
      } catch (error) {
        console.error('Error fetching materials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMaterials();
  }, []);

  // Filter materials based on search term
  const filteredMaterials = materials.filter((material) =>
    material.materialName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    material.materialId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Generate status class based on status
  const getStatusClass = (status) => {
    switch (status) {
      case 'Available':
        return 'status-available';
      case 'Low':
        return 'status-low';
      case 'Out of Stock':
        return 'status-out';
      default:
        return '';
    }
  };

  return (
    <Box sx={{ display: 'flex' }} className="dashboard-container">
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, overflow: 'auto' }} className="main-content">
        <Header title="LITHU FASHIONS" onMenuClick={handleMenuToggle} />
        
        <Container className="inventory-list-container" maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Box className="inventory-header">
            <Typography
              variant="h4"
              className="heading"
              style={{ fontWeight: 600 }}
            >
              Inventory List
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Add />}
              onClick={handleAddInventory}
              className="add-button"
            >
              Add Material
            </Button>
          </Box>

          <Box className="search-filter-container">
            <TextField
              variant="outlined"
              placeholder="Search materials..."
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              className="search-field"
            />
          </Box>

          {loading ? (
            <Typography align="center" className="loading-text">Loading inventory data...</Typography>
          ) : filteredMaterials.length === 0 ? (
            <Paper className="empty-state">
              <Typography variant="h6">No materials found</Typography>
              <Typography variant="body2">Add new materials or try a different search term</Typography>
            </Paper>
          ) : (
            <TableContainer component={Paper} className="table-container">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Material ID</TableCell>
                    <TableCell>Material Name</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Unit Price</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredMaterials.map((material) => (
                    <TableRow key={material.materialId}>
                      <TableCell>
                        <img 
                          src={material.imageUrl || '/placeholder-image.jpg'} 
                          alt={material.materialName}
                          className="material-thumbnail" 
                        />
                      </TableCell>
                      <TableCell>{material.materialId}</TableCell>
                      <TableCell>{material.materialName}</TableCell>
                      <TableCell>{material.qtyInStock}</TableCell>
                      <TableCell>
                        <span className={`status-badge ${getStatusClass(material.status)}`}>
                          {material.status}
                        </span>
                      </TableCell>
                      <TableCell>${parseFloat(material.unitPrice).toFixed(2)}</TableCell>
                      <TableCell>
                        <IconButton 
                          color="error"
                          onClick={() => handleDeleteMaterial(material.materialId)}
                          className="delete-button"
                        >
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default InventoryList;