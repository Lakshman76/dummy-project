import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, TextField, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    gender: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', formData);
      console.log(response.data); // Handle success response from the server
      navigate("/tutors");
    } catch (error) {
      console.error('Error:', error.response.data); // Handle error response from the server
    }
  };

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center" mt={5}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h1" gutterBottom>
                Registration Form
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label=""
                      type="date"
                      name="birthday"
                      value={formData.birthday}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <RadioGroup name="gender" value={formData.gender} onChange={handleChange}>
                      <FormControlLabel value="Female" control={<Radio />} label="Female" />
                      <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    </RadioGroup>
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="primary" type="submit">
                      Register
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
