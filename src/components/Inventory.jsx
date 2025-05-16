import React, { useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Box,
} from '@mui/material';
import axios from 'axios';
import Sidebar from './Sidebar';
import Header from './Header';
import './Inventory.css'; // Make sure to create this CSS file

const Inventory = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [materialDetails, setMaterialDetails] = useState({
    materialId: '',
    materialName: '',
    image: null,
    qtyInStock: '',
    status: '',
    unitPrice: '',
    description: '',
  });

  const [imagePreview, setImagePreview] = useState('');

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleChange = (e) => {
    setMaterialDetails({ ...materialDetails, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const updatedPreview = URL.createObjectURL(file);
      setMaterialDetails({ ...materialDetails, image: file });
      setImagePreview(updatedPreview);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { materialId, materialName, image, qtyInStock, status, unitPrice, description } = materialDetails;
    if (!materialId || !materialName || !image || !qtyInStock || !status || !unitPrice || !description) {
      alert('Please fill in all fields.');
      return;
    }

    const formData = new FormData();
    formData.append('materialId', materialId);
    formData.append('materialName', materialName);
    formData.append('qtyInStock', qtyInStock);
    formData.append('status', status);
    formData.append('unitPrice', unitPrice);
    formData.append('description', description);
    formData.append('image', image);

    try {
      // Update the API endpoint to match your backend
      const response = await axios.post('YOUR_BACKEND_API_URL/api/materials/add', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log('Material added successfully:', response.data);
      alert('Material added successfully!');
      setMaterialDetails({
        materialId: '',
        materialName: '',
        image: null,
        qtyInStock: '',
        status: '',
        unitPrice: '',
        description: '',
      });
      setImagePreview('');
    } catch (error) {
      console.error('Error adding material:', error);
      alert(error.response?.data?.message || 'Failed to add material. Please try again.');
    }
  };

  return (
    <Box sx={{ display: 'flex' }} className="dashboard-container">
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, overflow: 'auto' }} className="main-content">
        <Header title="LITHU FASHIONS" onMenuClick={handleMenuToggle} />
        
        <Container className="add-material-container" maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            className="heading"
            style={{ fontWeight: 600 }}
          >
            Add New Material
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* Material ID */}
              <Grid item xs={12}>
                <TextField
                  label="Material ID"
                  variant="outlined"
                  fullWidth
                  name="materialId"
                  value={materialDetails.materialId}
                  onChange={handleChange}
                  className="text-field"
                />
              </Grid>

              {/* Material Name */}
              <Grid item xs={12}>
                <TextField
                  label="Material Name"
                  variant="outlined"
                  fullWidth
                  name="materialName"
                  value={materialDetails.materialName}
                  onChange={handleChange}
                  className="text-field"
                />
              </Grid>

              {/* Quantity in Stock */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Qty in Stock"
                  variant="outlined"
                  fullWidth
                  name="qtyInStock"
                  value={materialDetails.qtyInStock}
                  onChange={handleChange}
                  className="text-field"
                  type="number"
                />
              </Grid>

              {/* Status */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="status-label">Status</InputLabel>
                  <Select
                    labelId="status-label"
                    name="status"
                    value={materialDetails.status}
                    onChange={handleChange}
                    label="Status"
                    className="text-field"
                  >
                    <MenuItem value="Available">Available</MenuItem>
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Out of Stock">Out of Stock</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Unit Price */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Unit Price"
                  variant="outlined"
                  fullWidth
                  name="unitPrice"
                  value={materialDetails.unitPrice}
                  onChange={handleChange}
                  className="text-field"
                  type="number"
                />
              </Grid>

              {/* Description */}
              <Grid item xs={12}>
                <TextField
                  label="Description"
                  variant="outlined"
                  fullWidth
                  name="description"
                  value={materialDetails.description}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  className="text-field"
                />
              </Grid>

              {/* Image Upload */}
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  component="label"
                  color="secondary"
                  fullWidth
                  className="upload-button"
                >
                  Upload Image
                  <input
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    hidden
                  />
                </Button>
              </Grid>

              {/* Image Preview */}
              <Grid item xs={12}>
                {imagePreview && (
                  <div className="image-preview-container">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="image-preview"
                    />
                  </div>
                )}
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  className="submit-button"
                >
                  Add Material
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </Box>
  );
};

export default Inventory;